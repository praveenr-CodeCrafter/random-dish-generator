// components/Header.js
import React from 'react';
import { Utensils } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-8 sm:mb-12">
    <div className="flex items-center justify-center mb-4">
      <Utensils style={{ color: 'var(--teal-900)' }} className="w-8 h-8 sm:w-12 sm:h-12" />
    </div>
    <h1 style={{ color: 'var(--teal-900)' }} className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 font-serif">
      Random Dish Generator
    </h1>
    <p style={{ color: 'var(--gray-600)'}} className="font-serif text-sm sm:text-base">
        Discover New Flavors with AI-Powered Cuisine Suggestions!
    </p>
  </div>
);

export default Header;
