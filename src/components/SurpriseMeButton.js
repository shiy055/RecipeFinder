// Random recipe button logic

import React from 'react';

const SurpriseMeButton = ({ onSurprise }) => (
  <div className="text-center mb-4">
    <button className="btn btn-warning" onClick={onSurprise}>
      🎲 Surprise Me
    </button>
  </div>
);

export default SurpriseMeButton;

