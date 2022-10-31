import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecipeDescription from "../components/ui/RecipeDescription";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  async function getMealData() {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setRecipe(data.meals[0]);
  }

  useEffect(() => {
    getMealData();
  }, []);

  return (
    <div className="recipe">
      <Navbar />
      <RecipeDescription recipe={recipe}/>
    </div>
  );
}

export default Recipe;
