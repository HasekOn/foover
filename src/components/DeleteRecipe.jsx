import React from 'react';

const DeleteRecipe = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md sm:max-w-lg md:w-1/2 text-center">
        <h2 className="text-2xl mb-4 font-bold">Do you want to delete this recipe?</h2>
        <h3 className="text-xl mb-4">{recipe.title}</h3>
        <img src={recipe.image} alt="Recipe" className="w-full h-40 object-cover mx-auto mb-4" />
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecipe;
