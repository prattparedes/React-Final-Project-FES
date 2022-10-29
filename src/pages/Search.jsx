import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRecipes() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );

    setRecipes(data.meals);
    setLoading(false);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className='search'>
      <Navbar />
      <SearchHeader getRecipes={getRecipes}/>
      <SearchResults recipes={recipes} loading={loading} getRecipes={getRecipes}/>
    </div>
  )
}

export default Search