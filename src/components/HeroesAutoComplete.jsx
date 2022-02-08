import { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HeroesAutoComplete({
  id = 'combo-box-demo',
  onChange,
}) {
  const [searchResult, setSearchResult] = useState([]);

  async function fetchCharacter(search = '') {
    let searchQuery = '';

    if (search) {
      searchQuery = `name=${search}`;
    }

    setSearchResult(
      (
        await axios.get(
          `${process.env.REACT_APP_SUICIDE_SQUAD_API}/heroes?${searchQuery}`
        )
      ).data.results
    );
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id={id}
      options={searchResult}
      sx={{ width: 300, border: 'solid 1px grey', borderRadius: '5px' }}
      getOptionLabel={(option) => option.name ?? 'Unknown'}
      filterOptions={(x) => x}
      onChange={(_, heros) => onChange && onChange(heros)}
      onInputChange={(_, value) => fetchCharacter(value)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <StyledInputBase placeholder="Search…" {...params} />
        </div>
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )}
    />
  );
}
