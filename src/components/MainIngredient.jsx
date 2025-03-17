import React from 'react';

const MainIngredient = ({ mainIngredient, setMainIngredient }) => (
  <div className="mb-4">
    <label htmlFor="mainIngredient" className="block text-sm font-medium text-[var(--gray-700)] mb-2">
      Main Ingredient (Optional):
    </label>
    <input
      type="text"
      id="mainIngredient"
      value={mainIngredient}
      onChange={(e) => setMainIngredient(e.target.value)}
      className="w-full p-2 border border-[var(--sage-400)] rounded-md"
      placeholder="eg., chicken, beef, tofu, etc."
    />
  </div>
);

export default MainIngredient;
