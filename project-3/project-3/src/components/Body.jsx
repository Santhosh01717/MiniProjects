import React, { useState } from "react";
import "./../CssFiles/body.css";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "./../Ai-Files/ai";
import ClaudeRecipe from "./ClaudeRecipe";
const Body = () => {
  const [ingredients, setIngredients] = useState([
    "I have tomatoes", "cheese", "and bread."]);
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    input.length > 0 ? setIngredients((prev) => [...prev, input]) : "";
    setInput("");
  };
  const getRecipe = async () => {
    console.log("button");
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  };
  const isTrue = true;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="body-container">
          <form className="input-container">
            <input
              className="input-bar"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. oregano"
            ></input>
            <button className="add-button" onClick={handleSubmit}>
              + Add ingredient
            </button>
          </form>
          <div>{/* <p>{ isTrue && <p>hi this is true</p> }</p> */}</div>
          {ingredients.length > 0 && (
            <Recipe ingredients={ingredients} getRecipe={getRecipe} />
          )}
        </div>
      </div>
      <div style={{display: "flex" , justifyContent: "center"}}>{recipe && <ClaudeRecipe recipe={recipe} />}</div>
    </>
  );
};

export default Body;
