import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('pork')

  async function getRecipes(searchName) {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    setRecipes(data.meals);
    setLoading(false);
  }

  useEffect(() => {
    getRecipes();
  }, [recipes]);

  return (
    <div className='search'>
      <Navbar />
      <SearchHeader getRecipes={getRecipes} setSearchData={setSearch}/>
      <SearchResults recipes={recipes} loading={loading} getRecipes={getRecipes}/>
    </div>
  )
}

export default Search