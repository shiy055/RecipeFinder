import React from 'react';

const RecipeCard = ({ recipe, onSave, isFavorite }) => {
  return (
    <div className="card mb-4">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text"><strong>Time:</strong> {recipe.time}</p>
        <p className="card-text"><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
        <ol>{recipe.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        {!isFavorite && <button className="btn btn-success" onClick={() => onSave(recipe)}>Save to Favorites</button>}
      </div>
    </div>
  );
};

export default RecipeCard;