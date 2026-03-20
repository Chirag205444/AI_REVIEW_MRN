import React from 'react';
import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-xl rounded-lg">
        <h1 className="text-9xl font-extrabold text-red-700 mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, we can't find the page you're looking for. You might find what you need on the home page.
        </p>
        
        <Link 
          to="/" 
          className="px-6 py-3 bg-red-700 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
