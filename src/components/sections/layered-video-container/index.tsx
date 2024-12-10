import React from 'react';

const LayeredVideoContainer = () => {
  return (
    <div className="relative">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-[#120F24]" />
        <div className="h-1/2 bg-gray-100" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-6xl mx-auto h-[700px] flex items-center justify-center">
        {/* Background layers */}
        <div className="absolute top-12 right-6 w-4/5 h-4/5 bg-gray-400 rounded-xl transform rotate-2" />
        <div className="absolute top-6 right-12 w-4/5 h-4/5 bg-gray-300 rounded-xl transform -rotate-1" />
        
        {/* Main video container */}
        <div className="relative w-4/5 h-4/5 bg-white rounded-xl shadow-xl flex items-center justify-center">
          <p className="text-gray-500 text-2xl">Video or animation</p>
        </div>
      </div>
    </div>
  );
};

export default LayeredVideoContainer;