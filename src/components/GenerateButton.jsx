import React from 'react';
import { Loader2 } from 'lucide-react';

const GenerateButton = ({ onClick, loading, disabled  }) => (
  <button
    onClick={onClick}
    disabled={loading || disabled}
    style={{
      backgroundColor: 'var(--teal-900)',
      color: 'var(--white)',
    }}
    className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium cursor-pointer hover:bg-[var(--sage-400)] 
    hover:text-teal-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center 
    justify-center text-sm sm:text-base"
  >
    {loading ? (
      <>
        <Loader2 className="animate-spin mr-2 w-4 h-4 sm:w-5 sm:h-5" />
        Generating...
      </>
    ) : (
      'Generate Random Dish'
    )}
  </button>
);

export default GenerateButton;
