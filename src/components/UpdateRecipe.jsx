import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const UpdateRecipe = ({ recipe, closeDialog }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md sm:max-w-lg md:w-1/3 max-h-full overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Update Recipe</h3>
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recipe Image
          </label>
          {recipe.image ? (
            <div className="relative w-full h-64 mb-4"> 
              <img src={recipe.image} alt="User Profile" className="w-full h-full object-cover rounded" /> 
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"> 
                <FontAwesomeIcon icon={faPlus} className="text-white text-4xl" /> 
              </div> 
            </div>
          ) : (
            <input
              type="text"
              placeholder="Enter image URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Name</label>
              <input
                type="text"
                name="title"
                placeholder="Recipe Name"
                value={recipe.title}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={recipe.image}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea
                name="description"
                placeholder="Description"
                value={recipe.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Cooking Time</label>
              <input
                type="text"
                name="cookingTime"
                placeholder="Cooking Time"
                value={recipe.cookingTime}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Servings</label>
              <input
                type="number"
                name="servings"
                placeholder="Servings"
                value={recipe.servings}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Difficulty</label>
              <input
                type="text"
                name="difficulty"
                placeholder="Difficulty"
                value={recipe.difficulty}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Instructions</label>
              <textarea
                name="instructions"
                placeholder="Instructions"
                value={recipe.instructions}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={closeDialog}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeDialog}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipe;
