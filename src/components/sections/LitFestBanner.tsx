
import React from 'react';

const LitFestBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">LitFest 2025</h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
          Join us for a celebration of literature, creativity, and expression
        </p>
        <div className="flex justify-center mt-8">
          <div className="inline-block px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg transform transition hover:scale-105">
            May 31<sup>st</sup>,  2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default LitFestBanner;
