import React from "react";
import Recipe from "./Recipe";
const RecipeList = ({ recipeData }) => {
  const nutrients = recipeData.nutrients;
  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
      <section className="recipes">
        {recipeData.meals.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </section>
    </main>
  );
};

export default RecipeList;
