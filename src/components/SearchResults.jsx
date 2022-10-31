import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import ResultCard from "./ui/ResultCard";

function SearchResults({ recipes, loading }) {
  //   const [recipes, setRecipes] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   async function getRecipes() {
  //     const { data } = await axios.get(
  //       "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  //     );

  //     setRecipes(data.meals);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     getRecipes();
  //   }, []);

  return (
    <div className="SearchResults">
      <div className="search__filters">
        <span className="search__text">Search results:</span>
        <select name="" id="filter" defaultValue={"Sort"}>
          <option disabled>Sort</option>
          <option value="RATING_HTL">Rating IMDb, High to Low</option>
          <option value="RATING_LTH">Rating IMDb, Low to High</option>
          <option value="YEAR">Release Year</option>
        </select>
      </div>
      <div className="recipes">
        {loading ? (
          <></>
        ) : (
          recipes
            .map((post) => (
              <ResultCard
                key = {post.idMeal}
                title={post.strMeal}
                category={post.strCategory}
                area={post.strArea}
                tags={post.strTags}
                image={post.strMealThumb}
                id={post.idMeal}
              />
            ))
            .slice(0, 6)
        )}
      </div>
    </div>
  );
}

export default SearchResults;
