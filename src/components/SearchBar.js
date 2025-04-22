// Ingredient input field

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import recipesData from '../data/recipesData';

const SearchBar = ({ onSearch }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const input = e.target.elements.ingredients.value;
  //   onSearch(input);
  // };

  // return (
  //   <form onSubmit={handleSubmit} className="mb-4">
  //     <div className="input-group">
  //       <input
  //         type="text"
  //         name="ingredients"
  //         className="form-control"
  //         placeholder="Enter ingredients (e.g., tomato, basil)"
  //       />
  //       <button type="submit" className="btn btn-primary">Find Recipes</button>
  //     </div>
  //   </form>
  // );
  return (
    <Autocomplete
      freeSolo
      id="recipe-search"
      disableClearable
      options={recipesData.map((item) => item.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search recipes"
          slotProps={{
            input: {
              ...params.InputProps,
              type: 'search',
            },
          }}
        />
      )}
    />
  );
};

export default SearchBar;

