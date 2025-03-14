// components/GenerateButton.js
import React from 'react';
import { Loader2 } from 'lucide-react';

const GenerateButton = ({ onClick, loading }) => (
  <button
    onClick={onClick}
    disabled={loading}
    style={{
      backgroundColor: 'var(--purple-600)',
      color: 'var(--white)',
    }}
    className="w-full py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
  >
    {loading ? (
      <>
        <Loader2 className="animate-spin mr-2" />
        Generating...
      </>
    ) : (
      'Generate Random Dish'
    )}
  </button>
);

export default GenerateButton;
