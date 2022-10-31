import React, { useState } from "react";
import "./RecipeDescription.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ListAltIcon from "@mui/icons-material/ListAlt";

function RecipeDescription() {
  const [recipe, setRecipe] = useState();
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
            <figure className="recipe__image">
              <img
                src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
                alt=""
              />
            </figure>
            <div className="recipeDescription__description">
              <h2 className="recipeDescription__title">Título</h2>
              <h3 className="recipeDescription__category">Category: Chicken</h3>
              <h3 className="recipeDescription__sub-title">Instructions</h3>
              <p className="recipeDescription__instructions">
                STEP 1 - MARINATING THE CHICKEN\r\nIn a bowl, add chicken, salt,
                white pepper, ginger juice and then mix it together well.\r\nSet
                the chicken aside.\r\nSTEP 2 - RINSE THE WHITE RICE\r\nRinse the
                rice in a metal bowl or pot a couple times and then drain the
                water.\r\nSTEP 2 - BOILING THE WHITE RICE\r\nNext add 8 cups of
                water and then set the stove on high heat until it is boiling.
                Once rice porridge starts to boil, set the stove on low heat and
                then stir it once every 8-10 minutes for around 20-25
                minutes.\r\nAfter 25 minutes, this is optional but you can add a
                little bit more water to make rice porridge to make it less
                thick or to your preference.\r\nNext add the marinated chicken
                to the rice porridge and leave the stove on low heat for another
                10 minutes.\r\nAfter an additional 10 minutes add the green
                onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper
                and stir for 10 seconds.\r\nServe the rice porridge in a
                bowl\r\nOptional: add Coriander on top of the rice porridge.
              </p>
            </div>
          </div>
          <div className="recipeDescription__ingredients">
            <h2 className="recipeDescription__ingredients--title">
              Principal Ingredients&nbsp;
              <ListAltIcon />
            </h2>
            <ul>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
              <li>1 oz of Chicken</li>
            </ul>
          </div>
          <div className="recipeDescription__video">
            <h2 className="recipeDescription__video--title">
              Watch the Recipe Video Here&nbsp;
              <YouTubeIcon />!
            </h2>
            <YouTube videoId="kqEfk801E94" opts={opts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDescription;
