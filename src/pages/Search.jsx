import React from 'react'
import Navbar from '../components/Navbar'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

function Search() {
  return (
    <div className='search'>
      <Navbar />
      <SearchHeader />
      <SearchResults />
    </div>
  )
}

export default Search