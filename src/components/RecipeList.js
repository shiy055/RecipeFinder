/**
 * @file RecipeList.js
 * @description Renders a grid (Bootstrap row) of RecipeCard components,
 * each representing an individual recipe from the filtered list.
 */

import React from 'react';
import RecipeCard from './RecipeCard';

/**
 * @function RecipeList
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.recipes - List of recipe objects to display.
 * @param {Function} props.onSave - Function to handle saving a recipe to favorites.
 * @returns {JSX.Element}
 * @description Displays a responsive 2-column grid of RecipeCard components.
 */

const RecipeList = ({ recipes, onSave }) => (
  <div className="row">
    {recipes.map(recipe => (
      /**
       * @description Each recipe is rendered in a Bootstrap column.
       * Passes down `recipe`, `onSave` handler, and hardcoded `isFavorite: false`
       * since this component shows the filtered search results (not saved ones).
       */
      <div key={recipe.id} className="col-md-6">
        <RecipeCard recipe={recipe} onSave={onSave} isFavorite={false} />
      </div>
    ))}
  </div>
);

export default RecipeList;
