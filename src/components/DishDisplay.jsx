import React from 'react';

const DishDisplay = ({ dish }) => (
  dish && (
    <div
        style={{
            backgroundColor: 'var(--sage-400)', 
            color: 'var(--teal-900)',
        }}
        className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3">{dish.name}</h2>

      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--teal-900)' }}>
          Ingredients:
        </h3>
        <ul className="list-disc pl-5 text-sm sm:text-base" style={{ color: 'var(--gray-700)' }}>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--teal-900)' }}>
          Procedure:
        </h3>
        <ol className="list-decimal pl-5 text-sm sm:text-base" style={{ color: 'var(--gray-700)' }}>
          {dish.procedure.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
);

export default DishDisplay;
