// List of Recipes
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSave }) => (
  <div className="row">
    {recipes.map(recipe => (
      <div key={recipe.id} className="col-md-6">
        <RecipeCard recipe={recipe} onSave={onSave} isFavorite={false} />
      </div>
    ))}
  </div>
);

export default RecipeList;
