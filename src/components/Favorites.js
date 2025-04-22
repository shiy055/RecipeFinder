/**
 * @file Favorites.js
 * @description Renders a list of recipes that have been saved to favorites.
 * Displays each favorite using the RecipeCard component.
 */

import React from 'react';
import RecipeCard from './RecipeCard';

/**
 * @function Favorites
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.favorites - List of saved recipe objects retrieved from localStorage.
 * @returns {JSX.Element}
 * @description Displays saved recipes in a Bootstrap grid layout under the "Saved Recipes" section.
 */
const Favorites = ({ favorites }) => (
  <div className="mt-5">
    {/* Section Title */}
    <h3>Saved Recipes</h3>
    {/* Recipe Grid */}
    <div className="row">
      {favorites.map(recipe => (
        /**
         * @description Maps over each saved recipe and renders it in a RecipeCard.
         * Sets `isFavorite` to true to disable the "Save" button.
         * The `onSave` handler is passed as an empty function since saving is not needed here.
         */
        <div key={recipe.id} className="col-md-6">
          <RecipeCard recipe={recipe} onSave={() => {}} isFavorite={true} />
        </div>
      ))}
    </div>
  </div>
); 

export default Favorites;
