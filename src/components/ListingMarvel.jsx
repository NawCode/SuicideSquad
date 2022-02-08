import axios from 'axios';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Cards from './Cards';

function ListingMarvel({ countPerPage = 20 }) {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  async function fetchCharacter() {
    const data = (
      await axios.get(
        `${process.env.REACT_APP_SUICIDE_SQUAD_API}/heroes?publisher=Marvel&countPerPage=${countPerPage}&page=${currentPage}`
      )
    ).data;
    console.log(data.results);
    setCharacterList(data.results);
    setPageCount(Math.ceil(Number(data.total) / countPerPage));
  }

  useEffect(() => {
    fetchCharacter();
  }, [currentPage]);

  function onPageChange(_, page) {
    setCurrentPage(page);
  }

  return (
    <>
      <Cards characterList={characterList} />
      <div className="pagination-container">
        <Pagination
          count={pageCount}
          onChange={onPageChange}
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          color="primary"
        />
      </div>
    </>
  );
}

export default ListingMarvel;
