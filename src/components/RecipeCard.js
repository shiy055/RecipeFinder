/**
 * @file RecipeCard.js
 * @description Functional component that renders an individual recipe card,
 * including name, image, ingredients, steps, and an optional "Save to Favorites" button.
 */

import React from 'react';


/**
 * @function RecipeCard
 * @component
 * @param {Object} props
 * @param {Object} props.recipe - A recipe object containing display data like name, image, ingredients, etc.
 * @param {Function} props.onSave - Callback function to add recipe to favorites.
 * @param {boolean} props.isFavorite - Whether this recipe is already in the user's favorites.
 * @returns {JSX.Element}
 * @description Displays a single recipe card with relevant information and save interaction.
 */

const RecipeCard = ({ recipe, onSave, isFavorite }) => {
  return (
    <div className="card mb-4">
      {/* Recipe Image */}
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />

      {/* Card Body: Title, Time, Difficulty, Ingredients, Steps, and Save Button */}
      <div className="card-body">

        <h5 className="card-title">{recipe.name}</h5>
        {/* Display Cooking Time */}
        <p className="card-text"><strong>Time:</strong> {recipe.time}</p>
        {/* Display Difficulty */}
        <p className="card-text"><strong>Difficulty:</strong> {recipe.difficulty}</p>
        {/* Ingredients List */}
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        {/* Cooking Steps in Ordered List */}
        <ol>{recipe.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        {/* Conditional Save Button: only shown if not already in favorites */}
        {!isFavorite && <button className="btn btn-success" onClick={() => onSave(recipe)}>Save to Favorites</button>}
      </div>
    </div>
  );
};

export default RecipeCard;