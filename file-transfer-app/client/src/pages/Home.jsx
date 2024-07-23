import React from 'react';

export const Home = () => {
  return (
    <div className="bg-blue-50 dark:bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to the File Transfer App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Seamlessly transfer your files with ease and security.
        </p>
      </div>
    </div>
  );
};
