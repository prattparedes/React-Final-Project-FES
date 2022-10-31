import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchHeader.css";
import Background from "../assets/backgroundimg.jpg";

function SearchHeader({ getRecipes, setSearchData }) {
  const [searchChild, setSearchChild] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    console.log("searched" + searchChild);
    setSearchData(searchChild);
    getRecipes(searchChild);
  };

  return (
    <div className="searchHeader">
      <div className="searchHeader__content">
        <h1 className="searchHeader__title">Browse our recipes</h1>
        <form className="searchHeader__searchInput">
          <input
            type="text"
            placeholder="Search for Recipes by Name"
            className="searchHeader__input"
            onChange={(e) => setSearchChild(e.target.value)}
          />
          <button type="submit" className="search__btn" onClick={searchHandler}>
            <SearchIcon className="searchHeader__icon" />
          </button>
        </form>
        <div className="backgroundImg__wrapper"></div>
      </div>
    </div>
  );
}

export default SearchHeader;
