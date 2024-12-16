import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeImage = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative w-full mx-[20px] overflow-hidden rounded-lg shadow-lg">
        <img
          src="/photo/donuts.png"
          alt="Smashed potatoes"
          className="w-full h-[40vh] object-cover brightness-75"
        />

        <div className="absolute bottom-6 left-6 text-white text-left">
          <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
            SPICED DONUTS
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Excellent donuts in every bite, you will salivate
          </p>

          <Link
            to="/single-recipe/8"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded shadow-lg"
          >
            The best bit →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImage;
