// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import CuisineSelector from './components/CuisineSelector';
import GenerateButton from './components/GenerateButton';
import ErrorMessage from './components/ErrorMessage';
import DishDisplay from './components/DishDisplay';
import { generateRandomDish } from './utils/openaiService';

const cuisines = [
  'Italian', 'Japanese', 'Mexican', 'Indian', 'French',
  'Chinese', 'Thai', 'Mediterranean', 'American', 'Korean',
  'Vietnamese', 'Spanish', 'Moroccan', 'Greek', 'British',
  'Turkish', 'Brazilian', 'Lebanese', 'Caribbean', 'Filipino'
];

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateDish = async () => {
    if (!selectedCuisine) {
      setError('Please select a cuisine');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const generatedDish = await generateRandomDish(selectedCuisine);
      setDish(generatedDish);
    } catch (err) {
      setError('Failed to generate dish. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen to-sage-400 p-4 sm:p-8 bg-sage-400">
      <div className="max-w-2xl mx-auto">
        <Header />
        <div className="bg-[var(--white)] rounded-xl shadow-lg p-4 sm:p-8">
          <CuisineSelector
            cuisines={cuisines}
            selectedCuisine={selectedCuisine}
            onSelect={setSelectedCuisine}
          />
          <GenerateButton onClick={handleGenerateDish} loading={loading} />
          <ErrorMessage error={error} />
          <DishDisplay dish={dish} />
        </div>
      </div>
    </div>
  );
}

export default App;