// components/DishDisplay.js
import React from 'react';

const DishDisplay = ({ dish }) => (
  dish && (
    <div
      style={{
        backgroundColor: 'var(--purple-50)',
        color: 'var(--purple-900)',
      }}
      className="mt-8 p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-3">{dish.name}</h2>
      <p style={{ color: 'var(--purple-700)' }}>{dish.description}</p>
    </div>
  )
);

export default DishDisplay;
