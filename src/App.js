import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const handleCalorieChange = (e) => {
    setCalories(e.target.value);
  };
  const getRecipeData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=b36d94c3186541fdad1aa4daf5d5f64e&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <>
      <div className="App">
        <section className="input-data">
          <input
            type="number"
            placeholder="Enter Calorie..."
            onChange={handleCalorieChange}
          />
        </section>
        <button onClick={getRecipeData}>Click to get recipes</button>
        {recipeData && <RecipeList recipeData={recipeData} />}
      </div>
    </>
  );
}

export default App;
