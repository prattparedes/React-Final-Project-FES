import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './SearchHeader.css'
import Background from '../assets/backgroundimg.jpg'

function SearchHeader() {
  return (
    <div className="searchHeader" >
        <div className="searchHeader__content">
            <h1 className="searchHeader__title">
                Browse our recipes
            </h1>
            <div className="searchHeader__searchInput">
                <input type="text" placeholder="Search for Recipes by Name" className="searchHeader__input" />
                <SearchIcon className="searchHeader__icon"/>
            </div>
            <div className="backgroundImg__wrapper">
            </div>
        </div>
    </div>
  );
}

export default SearchHeader;
