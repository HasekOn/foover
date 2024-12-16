import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDatabase, faUser, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import UpdateRecipe from './UpdateRecipe';
import DeleteRecipe from './DeleteRecipe';

const SingleRecipeIntro = ({ recipe, user }) => {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const openUpdateDialog = () => setShowUpdateDialog(true);
  const closeUpdateDialog = () => setShowUpdateDialog(false);

  const openDeleteDialog = () => setShowDeleteDialog(true);
  const closeDeleteDialog = () => setShowDeleteDialog(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white gap-10 mt-10">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src={recipe.image} alt={recipe.title} className="w-[50vh] h-[50vh] object-cover rounded mb-4 md:mb-0 shadow-lg" />
      </div>
      <div className="w-full h-full md:w-1/2 flex flex-col items-center justify-between">
        <div className="flex justify-between w-full mb-2">
          <div className="ml-auto flex space-x-2 mr-9 gap-2">
            {user && (recipe.createdByUserId === user.id || user.role === 'administrator') && (
              <FontAwesomeIcon icon={faEdit} className="text-yellow-300 cursor-pointer text-lg hover:text-yellow-600 hover:scale-110" onClick={openUpdateDialog} />
            )}
            {user && user.role === 'administrator' && (
              <FontAwesomeIcon icon={faTrash} className="text-red-600 cursor-pointer text-lg hover:text-red-800 hover:scale-110" onClick={openDeleteDialog} />
            )}
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-teal-600 mb-2 text-center">{recipe.title}</h2>
        <p className="text-gray-700 mb-4 text-center">The best snack for friends</p>
        <div className="flex justify-around w-full mb-4">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faClock} className="text-teal-600 mb-1" />
            <p className="text-gray-700 text-center">{recipe.cookingTime} MINS</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDatabase} className="text-teal-600 mb-1" />
            <p className="text-gray-700 text-center">{recipe.difficulty}</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-teal-600 mb-1" />
            <p className="text-gray-700 text-center">SERVES {recipe.servings}</p>
          </div>
        </div>
        <hr className="w-full my-4" />
        <p className="text-gray-700 text-justify">{recipe.description}</p>
      </div>

      {showUpdateDialog && (
        <UpdateRecipe recipe={recipe} closeDialog={closeUpdateDialog} />
      )}
      {showDeleteDialog && (
        <DeleteRecipe recipe={recipe} onClose={closeDeleteDialog} />
      )}
    </div>
  );
};

export default SingleRecipeIntro;
