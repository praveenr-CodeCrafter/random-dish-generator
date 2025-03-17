import React from 'react';

const ErrorMessage = ({ error }) => (
  error && (
    <div
      style={{
        backgroundColor: 'var(--red-50)',
        color: 'var(--red-600)',
      }}
      className="mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
    >
      {error}
    </div>
  )
);

export default ErrorMessage;
