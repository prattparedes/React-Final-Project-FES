import React from "react";
import "./SearchResults.css";
import ResultCard from "./ui/ResultCard";
import nothingImg from "../assets/emptyresults.svg";
import SearchOffIcon from "@mui/icons-material/SearchOff";

function SearchResults({ recipes, loading }) {
  return (
    <div className="SearchResults">
      <div className="search__filters">
        <span className="search__text">Search results:</span>
        {/* <select name="" id="filter" defaultValue={"Sort"}>
          <option disabled>Sort</option>
          <option value="RATING_HTL">Rating IMDb, High to Low</option>
          <option value="RATING_LTH">Rating IMDb, Low to High</option>
          <option value="YEAR">Release Year</option>
        </select> */}
      </div>
      {recipes ? (
        <div className="recipes">
          {loading ? (
            <>
              <div className="resultCard__skeleton"></div>
              <div className="resultCard__skeleton"></div>
              <div className="resultCard__skeleton"></div>
            </>
          ) : (
            recipes
              .map((post) => (
                <ResultCard
                  key={post.idMeal}
                  title={post.strMeal}
                  category={post.strCategory}
                  area={post.strArea}
                  tags={post.strTags}
                  image={post.strMealThumb}
                  id={post.idMeal}
                />
              ))
              .slice(0, 8)
          )}
        </div>
      ) : (
        <div className="searchResults__nothing">
          <h1 className="searchResults__nothing--title">
            NOTHING TO SHOW :( !
          </h1>
          <p className="searchResults__nothing--para">
            Try another search &nbsp; <SearchOffIcon />
          </p>
          <img src={nothingImg} alt="" className="searchResults__nothingImg" />
        </div>
      )}
    </div>
  );
}

export default SearchResults;
