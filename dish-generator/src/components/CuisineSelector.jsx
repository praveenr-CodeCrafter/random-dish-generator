// components/CuisineSelector.js
import React from 'react';

const CuisineSelector = ({ cuisines, selectedCuisine, onSelect }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
    {cuisines.map((cuisine) => (
      <button
        key={cuisine}
        onClick={() => onSelect(cuisine)}
        style={{
          backgroundColor: selectedCuisine === cuisine ? 'var(--purple-600)' : 'var(--gray-100)',
          color: selectedCuisine === cuisine ? 'var(--white)' : 'var(--gray-700)',
        }}
        className="p-3 rounded-lg text-sm font-medium transition-all hover:bg-gray-200"
      >
        {cuisine}
      </button>
    ))}
  </div>
);

export default CuisineSelector;
