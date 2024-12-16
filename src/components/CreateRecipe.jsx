import React from 'react';

const CreateRecipe = ({ closeDialog }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:w-1/3">
        <h3 className="text-xl font-bold mb-4">Create a New Recipe</h3>
        <form>
        <div className="mb-4 flex flex-col items-center"> 
          <label className="block text-gray-700 text-sm font-bold mb-2"> Upload photo </label> 
          <input type="text" placeholder="Enter image URL" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
           </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Recipe Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <input
              type='text'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cooking Time
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Servings
              </label>
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Difficulty
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ingredients
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Instructions
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeDialog}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Save
          </button>
          <button
            onClick={closeDialog}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
