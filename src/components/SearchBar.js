/**
 * @file SearchBar.js
 * @description A search input form that allows users to enter a comma-separated list
 * of ingredients. On submit, it triggers the `onSearch` callback with the input string.
 */

import React from 'react';

/**
 * @function SearchBar
 * @component
 * @param {Object} props
 * @param {Function} props.onSearch - Function passed from App.js to process the ingredient search.
 * @returns {JSX.Element}
 * @description Renders a controlled search input and submit button.
 * On form submission, it triggers recipe filtering via the provided `onSearch` handler.
 */

const SearchBar = ({ onSearch }) => {
  /**
   * @function handleSubmit
   * @param {Event} e - Form submit event.
   * @description Prevents default form behavior, extracts ingredient input,
   * and passes it to the parent-provided `onSearch` function.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.ingredients.value;
    onSearch(input);
  };

   /**
   * @returns {JSX.Element}
   * @description Renders the ingredient input field and submit button within a Bootstrap form layout.
   */
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        {/* Ingredient Text Input */}
        <input
          type="text"
          name="ingredients"
          className="form-control"
          placeholder="Enter ingredients (e.g., tomato, basil)"
        />
        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Find Recipes</button>
      </div>
    </form>
  );
}

export default SearchBar;
