import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

function Search() {
  const firstSearch = localStorage.getItem("firstSearch")

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')

  async function getRecipes() {
    setLoading(true)
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search || firstSearch}`
    );

    setRecipes(data.meals);
    setLoading(false);
  }

  useEffect(() => {
    getRecipes();
  }, [search]);

  return (
    <div className='search'>
      <Navbar />
      <SearchHeader getRecipes={getRecipes} setSearchData={setSearch}/>
      {<SearchResults recipes={recipes} loading={loading} getRecipes={getRecipes}/>}
    </div>
  )
}

export default Search