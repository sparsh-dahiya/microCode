import React from 'react';
import Layouts from './layouts';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      <h1 className="text-6xl font-extrabold text-green-500 mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-500 mb-6">The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow transition-all">Go Home</a>
      <div className="mt-8 text-green-400 text-lg animate-pulse">"Even Coders get lost sometimes..."</div>
    </div>
  );
}

export default NotFound;
