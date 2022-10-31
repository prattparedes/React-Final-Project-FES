import React, { useState } from "react";
import './RecipeDescription.css'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function RecipeDescription() {
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();

  return (
    <div className="recipeDescription">
      <div className="recipeDescription__container">
        <div className="row">
          <div className="recipeDescription__top" onClick={() => navigate('/search')}>
            <ArrowBackIcon />
            <h2>Search Recipes</h2>
          </div>
          <div className="recipeDescription__selected">
            <figure className="recipe__image">
                <img src='https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg' alt="" />
            </figure>
            <div className="recipeDescription__description">
                <h2 className="recipeDescription__title">
                    Título
                </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDescription;
