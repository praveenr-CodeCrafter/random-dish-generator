// components/Header.js
import React from 'react';
import { Utensils } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <Utensils style={{ color: 'var(--purple-600)' }} className="w-12 h-12" />
    </div>
    <h1 style={{ color: 'var(--gray-800)' }} className="text-4xl font-bold mb-4">
      Random Dish Generator
    </h1>
    <p style={{ color: 'var(--gray-600)' }}>
      Select a cuisine and let AI suggest a delicious dish for you!
    </p>
  </div>
);

export default Header;
