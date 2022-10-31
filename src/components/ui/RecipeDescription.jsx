import React, { useEffect, useState } from "react";
import "./RecipeDescription.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ListAltIcon from "@mui/icons-material/ListAlt";

function RecipeDescription({ recipe }) {
  const [ytId, setYtId] = useState("");
  const navigate = useNavigate();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  return (
    <div className="recipeDescription">
      <div className="recipeDescription__container">
        <div className="row">
          <div
            className="recipeDescription__top"
            onClick={() => navigate("/search")}
          >
            <ArrowBackIcon />
            <h2>Search Recipes</h2>
          </div>
          <div className="recipeDescription__selected">
            {Object.keys(recipe).length === 0 ? (
              <div className="recipeDescription__skeleton--body">
                <div className="recipe__img--skeleton"></div>
                <div className="recipeDescription__description-skeleton">
                  <div className="recipe__title--skeleton"></div>
                  <div className="recipe__category--skeleton"></div>
                  <div className="recipe__instructions--skeleton"></div>
                </div>
              </div>
            ) : (
              <>
                <figure className="recipe__image">
                  <img src={recipe.strMealThumb} alt="" />
                </figure>
                <div className="recipeDescription__description">
                  <h2 className="recipeDescription__title">{recipe.strMeal}</h2>

                  <h3 className="recipeDescription__category">
                    Category: {recipe.strCategory}
                  </h3>

                  <h3 className="recipeDescription__sub-title">Instructions</h3>
                  <p className="recipeDescription__instructions">
                    {recipe.strInstructions}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="recipeDescription__ingredients">
            <h2 className="recipeDescription__ingredients--title">
              Principal Ingredients&nbsp;
              <ListAltIcon />
            </h2>

            {Object.keys(recipe).length === 0 ? (
              <div className="ingredients__skeleton--list">
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
                <div className="ingredients__skeleton--item"></div>
              </div>
            ) : (
              <ul>
                {recipe.strIngredient1 && (
                  <li>
                    {recipe.strMeasure1} of {recipe.strIngredient1}
                  </li>
                )}
                {recipe.strIngredient2 && (
                  <li>
                    {recipe.strMeasure2} of {recipe.strIngredient2}
                  </li>
                )}
                {recipe.strIngredient3 && (
                  <li>
                    {recipe.strMeasure3} of {recipe.strIngredient3}
                  </li>
                )}
                {recipe.strIngredient4 && (
                  <li>
                    {recipe.strMeasure4} of {recipe.strIngredient4}
                  </li>
                )}
                {recipe.strIngredient5 && (
                  <li>
                    {recipe.strMeasure5} of {recipe.strIngredient5}
                  </li>
                )}
                {recipe.strIngredient6 && (
                  <li>
                    {recipe.strMeasure6} of {recipe.strIngredient6}
                  </li>
                )}
                {recipe.strIngredient7 && (
                  <li>
                    {recipe.strMeasure7} of {recipe.strIngredient7}
                  </li>
                )}
                {recipe.strIngredient8 && (
                  <li>
                    {recipe.strMeasure8} of {recipe.strIngredient8}
                  </li>
                )}
                {recipe.strIngredient9 && (
                  <li>
                    {recipe.strMeasure9} of {recipe.strIngredient9}
                  </li>
                )}
                {recipe.strIngredient10 && (
                  <li>
                    {recipe.strMeasure10} of {recipe.strIngredient10}
                  </li>
                )}
                {recipe.strIngredient11 && (
                  <li>
                    {recipe.strMeasure11} of {recipe.strIngredient11}
                  </li>
                )}
                {recipe.strIngredient12 && (
                  <li>
                    {recipe.strMeasure12} of {recipe.strIngredient12}
                  </li>
                )}
                {recipe.strIngredient13 && (
                  <li>
                    {recipe.strMeasure13} of {recipe.strIngredient13}
                  </li>
                )}
                {recipe.strIngredient14 && (
                  <li>
                    {recipe.strMeasure14} of {recipe.strIngredient14}
                  </li>
                )}
                {recipe.strIngredient15 && (
                  <li>
                    {recipe.strMeasure15} of {recipe.strIngredient15}
                  </li>
                )}
                {recipe.strIngredient16 && (
                  <li>
                    {recipe.strMeasure16} of {recipe.strIngredient16}
                  </li>
                )}
                {recipe.strIngredient17 && (
                  <li>
                    {recipe.strMeasure17} of {recipe.strIngredient17}
                  </li>
                )}
                {recipe.strIngredient18 && (
                  <li>
                    {recipe.strMeasure18} of {recipe.strIngredient18}
                  </li>
                )}
                {recipe.strIngredient19 && (
                  <li>
                    {recipe.strMeasure19} of {recipe.strIngredient19}
                  </li>
                )}
                {recipe.strIngredient20 && (
                  <li>
                    {recipe.strMeasure20} of {recipe.strIngredient20}
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="recipeDescription__video">
            <h2 className="recipeDescription__video--title">
              Watch the Recipe Video Here&nbsp;
              <YouTubeIcon />!
            </h2>
            {Object.keys(recipe).length === 0 ? (
              <div className="video__skeleton"></div>
            ) : (
              <YouTube
                videoId={
                  Object.keys(recipe).length === 0 ? (
                    <></>
                  ) : (
                    YouTubeGetID(recipe.strYoutube)
                  )
                }
                opts={opts}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDescription;
