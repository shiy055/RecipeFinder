// App logic and component composition
/**
 * @file App.js
 * @description Main application component. Handles state management for recipes,
 * search input, favorites, and rendering child components.
 */
import React, { useState, useEffect } from 'react';
import './App.css';
import recipesData from './data/recipesData';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import Favorites from './components/Favorites';
import SurpriseMeButton from './components/SurpriseMeButton';

/**
 * @function App
 * @returns {JSX.Element}
 * @description Root functional component that initializes and manages application state.
 * Includes logic for searching, random recipe selection, saving favorites, and rendering layout.
 */

const App = () => {
  
  /**
   * @constant {Array<Object>} recipes
   * @description Full list of recipes loaded from the static dataset.
   */
  const [recipes, setRecipes] = useState(recipesData); 

  /**
   * @constant {Array<Object>} filteredRecipes
   * @description Filtered results based on user ingredient search or "Surprise Me".
   */
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  /**
   * @constant {Array<Object>} favorites
   * @description Recipes saved by the user, loaded from localStorage on mount.
   */
  const [favorites, setFavorites] = useState([]);


  /**
   * @function useEffect
   * @description Load favorite recipes from localStorage on component mount.
   */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(saved);
  }, []);

   /**
   * @function handleSearch
   * @param {string} input - Comma-separated ingredient list from user.
   * @description Filters recipes based on fuzzy substring match with user-provided ingredients.
   * Updates `filteredRecipes` state.
   */
  const handleSearch = (input) => {
    const inputIngredients = input.toLowerCase().split(',').map(i => i.trim());
    const matched = recipes
      .map(recipe => {
        const matches = recipe.ingredients.filter(ingredient =>
          inputIngredients.some(input => ingredient.toLowerCase().includes(input))
        );
        return { ...recipe, matchCount: matches.length };
      })
      .filter(r => r.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
    setFilteredRecipes(matched);
  };


  /**
   * @function handleSurprise
   * @description Selects one random recipe from the dataset and displays it.
   */
  const handleSurprise = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setFilteredRecipes([random]);
  };



  /**
   * @function handleSave
   * @param {Object} recipe - A recipe object to save to favorites.
   * @description Adds a recipe to favorites and stores it in localStorage.
   * Prevents duplicates based on `recipe.id`.
   */
  const handleSave = (recipe) => {
    if (!favorites.find(r => r.id === recipe.id)) {
      const updated = [...favorites, recipe];
      setFavorites(updated);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updated));
    }
  };


  /**
   * @returns {JSX.Element}
   * @description Renders the layout of the app, including header, search,
   * random selection, recipe list, and favorites.
   */
  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <SurpriseMeButton onSurprise={handleSurprise} />
        <RecipeList recipes={filteredRecipes} onSave={handleSave} />
        <Favorites favorites={favorites} />
      </div>
    </div>
  );
};

export default App;