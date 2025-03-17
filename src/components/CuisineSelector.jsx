// components/CuisineSelector.js
import React from 'react';

const CuisineSelector = ({ cuisines, selectedCuisine, onSelect }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-8">
    {cuisines.map((cuisine) => (
      <button
        key={cuisine}
        onClick={() => onSelect(cuisine)}
        style={{
          backgroundColor: selectedCuisine === cuisine ? 'var(--teal-900)' : 'var(--gray-100)',
          color: selectedCuisine === cuisine ? 'var(--white)' : 'var(--gray-700)',
        }}
        className="p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium cursor-pointer transition-colors duration-200 cuisine-button"
      >
        {cuisine}
      </button>
    ))}
  </div>
);

export default CuisineSelector;
