/**
 * @file SurpriseMeButton.js
 * @description A stateless button component that, when clicked,
 * triggers a random recipe selection via the `onSurprise` callback.
 */

import React from 'react';

/**
 * @function SurpriseMeButton
 * @component
 * @param {Object} props
 * @param {Function} props.onSurprise - Callback function that selects a random recipe from the dataset.
 * @returns {JSX.Element}
 * @description A centered, styled button that encourages exploration by displaying a random recipe.
 */
const SurpriseMeButton = ({ onSurprise }) => (
  <div className="text-center mb-4">
    {/* Styled Button using Bootstrap; emoji adds fun, visual interest */}
    <button className="btn btn-warning" onClick={onSurprise}>
      🎲 Surprise Me
    </button>
  </div>
);

export default SurpriseMeButton;

