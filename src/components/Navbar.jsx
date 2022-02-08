import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@material-ui/core/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

import Marvel from '../images/Logo Marvel.jpg';
import DC from '../images/DC_Comics_logo.png';
import ST from '../images/StarWars_Logo.png';
import AL from '../images/allstar.png';
import SS from '../images/SuicideSquad.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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

const useStyles = makeStyles({
  drawer: {
    width: 280,
  },
});

export default function SearchAppBar() {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const classes = useStyles();
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
    <AppBar
      edge="start"
      variant="outlined"
      position="static"
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '100',
        backgroundColor: '#c11c29',
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <Link to="/">
            <Button>
              <img src={SS} alt="All satar universe" />
            </Button>
          </Link>
        </Typography>
        <Link to="/marvel">
          <ListItem button>
            <Button>
              <img src={Marvel} alt="Marvel logo" />
            </Button>
          </ListItem>
        </Link>
        <Link to="/dccomics">
          <ListItem button>
            <Button>
              <img src={DC} alt="DC logo" />
            </Button>
          </ListItem>
        </Link>
        <Link to="/starwars">
          <ListItem button>
            <Button>
              <img src={ST} alt="Star Wars logo" />
            </Button>
          </ListItem>
        </Link>
        <Link to="/allstar">
          <ListItem button>
            <Button>
              <img src={AL} alt="All Star logo" />
            </Button>
          </ListItem>
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={searchResult}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name ?? 'Unknown'}
            filterOptions={(x) => x}
            onChange={(_, heros) => heros && history.push(`/heroes/${heros.id}`)}
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
        </Search>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <Link to="/">
              <ListItem button>
                <Button variant="text">Accueil</Button>
              </ListItem>
            </Link>
            <Link to="/universe">
              <ListItem button>
                <Button variant="text">Univers</Button>
              </ListItem>
            </Link>
            <Link to="/fight">
              <ListItem button>
                <Button variant="text">Versus mode</Button>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
