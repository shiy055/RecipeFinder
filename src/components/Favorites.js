// Saved recipes

import React from 'react';
import RecipeCard from './RecipeCard';

const Favorites = ({ favorites }) => (
  <div className="mt-5">
    <h3>Saved Recipes</h3>
    <div className="row">
      {favorites.map(recipe => (
        <div key={recipe.id} className="col-md-6">
          <RecipeCard recipe={recipe} onSave={() => {}} isFavorite={true} />
        </div>
      ))}
    </div>
  </div>
); 

export default Favorites;
