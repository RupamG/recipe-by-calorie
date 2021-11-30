import React, { useEffect, useState } from "react";

const Recipe = ({ recipe }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=b36d94c3186541fdad1aa4daf5d5f64e&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [recipe.id]);
  return (
    <article>
      <h1>{recipe.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="desc">
        <li>Preparation time: {recipe.readyInMinutes} minutes</li>
        <li>Number of servings: {recipe.servings}</li>
      </ul>

      <a target="_blank" href={recipe.sourceUrl}>
        RECIPE
      </a>
    </article>
  );
};

export default Recipe;
