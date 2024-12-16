import React, { useState } from 'react';
import SmallRecipe from './SmallRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PopularRecipes = ({ recipes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleRecipes = 5;

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - maxVisibleRecipes, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + maxVisibleRecipes, recipes.length - maxVisibleRecipes));
  };

  const visibleRecipes = recipes.slice(currentIndex, currentIndex + maxVisibleRecipes);

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl text-teal-700 font-extrabold text-center mb-6">POPULAR RECIPES</h2>
      <div className="relative flex justify-center items-center">
        {currentIndex > 0 && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-700 hover:bg-teal-900 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        <div className="flex space-x-4" style={{ maxWidth: '100%' }}>
          {visibleRecipes.map((recipe, index) => (
            <Link to={`/single-recipe/${recipe.id}`} key={index} className="transform transition-transform duration-300 hover:scale-105">
              <SmallRecipe
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
              />
            </Link>
          ))}
        </div>
        {currentIndex + maxVisibleRecipes < recipes.length && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-700 hover:bg-teal-900 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PopularRecipes;
