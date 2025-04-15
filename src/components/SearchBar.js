// Ingredient input field

import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.ingredients.value;
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          name="ingredients"
          className="form-control"
          placeholder="Enter ingredients (e.g., tomato, basil)"
        />
        <button type="submit" className="btn btn-primary">Find Recipes</button>
      </div>
    </form>
  );
};

export default SearchBar;

