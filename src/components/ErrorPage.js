import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
      <p className="text-xl text-white mb-6">The page you're looking for could not be found.</p>
      <a href="/" className="text-blue-200 underline hover:text-blue-100">Go back to the homepage</a>

      {/* <div className="mt-8">
        <img src="/path/to/error-image.png" alt="Error" className="w-64 h-64 rounded-full shadow-lg" />
      </div> */}

      <div className="mt-8 text-white">
        <p className="text-lg">Don't worry, we're working on fixing it!</p>
        <p className="text-lg">In the meantime, check out these popular pages:</p>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        <a href="/portfolio" className="bg-green-500 text-white font-semibold text-lg px-6 py-3 rounded-full m-2 hover:bg-green-600">Portfolio</a>
        <a href="https://pradul-p.github.io/" className="bg-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-full m-2 hover:bg-blue-600">About</a>
        <a href="/contact" className="bg-indigo-500 text-white font-semibold text-lg px-6 py-3 rounded-full m-2 hover:bg-indigo-600">Contact</a>
      </div>
    </div>
  );
};

export default ErrorPage;
