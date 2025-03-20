import React, { useState } from 'react';

const DishDisplay = ({ dish }) => {
  const [activeTab, setActiveTab] = useState('ingredients');

  return dish && (
    <div className="bg-gradient-to-br from-sage-300 to-sage-400 text-teal-900 mt-8 p-6 rounded-xl shadow-lg border border-sage-500">
      <h2 className="text-3xl font-bold mb-4 text-center">{dish.name}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Prep Time', value: dish.prepTime },
          { label: 'Cook Time', value: dish.cookTime },
          { label: 'Total Time', value: dish.totalTime },
          { label: 'Servings', value: dish.servings },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-gradient-to-r from-green-100 to-green-200 text-gray-800 p-4 rounded-lg shadow-sm text-center"
          >
            <p className="text-sm font-semibold uppercase">{label}</p>
            <p className="text-lg font-medium">{value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 border border-sage-500 rounded-lg p-4 bg-white bg-opacity-50">
        <div className="flex border-b border-gray-300 justify-center align-center mb-4">
          <button
            className={`px-4 py-2 font-semibold text-lg sm:text-xl md:text-2xl ${activeTab === 'ingredients' ? 'border-b-2 border-teal-600 text-teal-800' : 'text-gray-600 cursor-pointer'} w-1/2`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button
            className={`px-4 py-2 font-semibold text-lg sm:text-xl md:text-2xl ${activeTab === 'nutrients' ? 'border-b-2 border-teal-600 text-teal-800' : 'text-gray-600 cursor-pointer'} w-1/2`}
            onClick={() => setActiveTab('nutrients')}
          >
            Nutrients
          </button>
        </div>


        {activeTab === 'ingredients' && (
          <>
            <ul className="bg-white bg-opacity-50 rounded-lg p-4 space-y-2 ">
              {(dish.ingredients || []).map((ingredient, index) => (
                <li key={index} className="flex items-center font-semibold">
                  <span className="mr-2 text-teal-600">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'nutrients' && (
          <>
            <p className="font-semibold mb-2 ml-5">Nutrition: Per serving</p>
            <ul className="bg-white bg-opacity-50 rounded-lg p-4 space-y-2 ">
              {(dish.nutrients || []).map((nutrient, index) => (
                <li key={index} className="flex items-center font-semibold">
                  <span className="mr-2 text-teal-600">•</span>
                  {nutrient}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className='border border-sage-500 rounded-lg p-4 bg-white bg-opacity-50'>
        <h3 className="text-2xl font-semibold mb-3 text-teal-800 border-b border-gray-300 p-2">Method</h3>
        <ol className="bg-white bg-opacity-50 rounded-lg p-4 space-y-4">
          {(dish.procedure || []).map((step, index) => (
            <li key={index} className="flex flex-col border-b border-gray-300 last:border-0 p-2">
              <span className="font-bold text-teal-600 mb-1">Step {index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default DishDisplay;
