// App logic and component composition
import React, { useState, useEffect } from 'react';
import './App.css';
import recipesData from './data/recipesData';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import Favorites from './components/Favorites';
import SurpriseMeButton from './components/SurpriseMeButton';

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorites(saved);
  }, []);

  const handleSearch = (input) => {
    const inputIngredients = input.toLowerCase().split(',').map(i => i.trim());
    const matched = recipes
      .map(recipe => {
        const matches = recipe.ingredients.filter(i => inputIngredients.includes(i));
        return { ...recipe, matchCount: matches.length };
      })
      .filter(r => r.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
    setFilteredRecipes(matched);
  };

  const handleSurprise = () => {
    const random = recipes[Math.floor(Math.random() * recipes.length)];
    setFilteredRecipes([random]);
  };

  const handleSave = (recipe) => {
    if (!favorites.find(r => r.id === recipe.id)) {
      const updated = [...favorites, recipe];
      setFavorites(updated);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updated));
    }
  };

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