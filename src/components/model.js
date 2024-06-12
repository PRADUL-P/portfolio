import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-xl text-gray-600 mb-6">The page you're looking for could not be found.</p>
      <a href="/" className="text-blue-500 underline">Go back to the homepage</a>
    </div>
  );
};

export default ErrorPage;
