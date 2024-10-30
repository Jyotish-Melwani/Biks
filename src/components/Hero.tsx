import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen bg-dark">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-12">
        <h1
          className="text-6xl font-bold text-white leading-tight mb-4"
        >
          Hi, I&#39;m Jyotish Melwani
        </h1>
        <p
          className="text-lg text-gray-400 leading-relaxed"
        >
          Software Developer | Building scalable and efficient solutions
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;