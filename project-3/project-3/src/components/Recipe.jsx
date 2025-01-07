import React from "react";
import "./../CssFiles/body.css";
const Recipe = ({ ingredients , getRecipe }) => {
  return (
    <>
      <div>
        <h1>Ingredients On Hand:</h1>
        <div className="ingredient-container">
          <ul>
            {ingredients.map((obj, index) => (
              <li className="list" key={index}>
                {obj}
              </li>
            ))}
          </ul>
        </div>
        {ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe}>Get a recipe</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Recipe;
