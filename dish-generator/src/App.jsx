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
  'Chinese', 'Thai', 'Mediterranean', 'American', 'Korean'
];

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateDish = async () => {
    if (!selectedCuisine) {
      setError('Please select a cuisine first');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const generatedDish = await generateRandomDish(selectedCuisine);
      setDish(generatedDish);
    } catch (err) {
      setError('Failed to generate dish. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Header />
        <div className="bg-white rounded-xl shadow-lg p-8">
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