import axios from 'axios';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Cards from './Cards';

function ListingStarWars({ countPerPage = 20 }) {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchCharacter() {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_SUICIDE_SQUAD_API}/heroes?publisher=George`
      )
    ).data;
    console.log(data.results);
    setCharacterList(data.results);
  }

  useEffect(() => {
    fetchCharacter();
  }, [currentPage]);

  return (
    <>
      <Cards characterList={characterList} />
    </>
  );
}

export default ListingStarWars;
