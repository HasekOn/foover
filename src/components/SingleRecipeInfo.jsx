import React from 'react';

const SingleRecipeInfo = ({ recipe }) => {
  return (
    <div className="my-6 p-6 bg-gray-100 shadow-lg rounded-lg flex justify-center items-center">
      <div className="w-full md:w-5/6 lg:w-2/3 flex flex-col md:flex-row justify-center items-start gap-20">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="text-3xl font-extrabold mb-4 text-teal-600 text-center md:text-left">Ingredients</h3>
          <div className="bg-white p-4 rounded-lg shadow w-full">
            {Array.isArray(recipe.ingredients) && recipe.ingredients.map((ingredient, index) => (
              <React.Fragment key={index}>
                <p className="text-gray-700 text-justify">{ingredient}</p>
                {index < recipe.ingredients.length - 1 && <hr className="my-2" />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="text-3xl font-extrabold mb-4 text-teal-600 text-center md:text-left">Method</h3>
          <ol className="list-decimal list-inside text-gray-700 pl-6 md:pl-0 text-justify">
            {Array.isArray(recipe.instructions) ? recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            )) : <li>{recipe.instructions}</li>}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeInfo;
