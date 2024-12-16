import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateRecipe from './CreateRecipe';
import UpdateUser from './UpdateUser';
import SmallRecipe from './SmallRecipe';

const UserPage = ({ user }) => {
  const navigate = useNavigate();
  const [isCreateRecipeDialogOpen, setIsCreateRecipeDialogOpen] = useState(false);
  const [isUpdateUserDialogOpen, setIsUpdateUserDialogOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handlePencilClick = () => {
    setIsUpdateUserDialogOpen(true);
  };

  const handlePlusClick = () => {
    setIsCreateRecipeDialogOpen(true);
  };

  const closeCreateRecipeDialog = () => {
    setIsCreateRecipeDialogOpen(false);
  };

  const closeUpdateUserDialog = () => {
    setIsUpdateUserDialogOpen(false);
  };

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(response => response.json())
      .then(data => {
        const userRecipes = data.filter(recipe => recipe.createdByUserId === user.id);
        setRecipes(userRecipes);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, [user.id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-page-container p-4 w-full h-full">
      {/* První div: Jméno a tlačítko pro odhlášení */}
      <div className="flex justify-between items-center mb-20 gap-10">
        <div className="flex items-center gap-10">
          <Link to="/main" className="text-2xl font-bold text-teal-600 mr-4 hover:text-teal-800">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h2 className="text-2xl font-bold text-teal-600">{user.firstName} {user.lastName}</h2>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faPencil}
            className="cursor-pointer text-teal-600 text-2xl hover:text-teal-800"
            onClick={handlePencilClick}
          />
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-800"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Druhý div: Profilová fotka a údaje, přepínač rolí, oblíbené recepty */}
      <div className="flex flex-row justify-evenly w-full gap-x-4">
        {/* Profilová fotka a údaje */}
        <div className="flex flex-col items-center p-4 w-full max-w-sm ">
          <label className="block font-bold text-gray-300 text-2xl">PROFILE IMAGE</label>
          <img src={user.image} alt="User Profile" className="w-320 h-320 mb-4" />
          <label className="block font-bold text-gray-300 text-2xl">USER DETAILS</label>
          <div className="text-left space-y-2 w-full">
            <div className="bg-gray-200 p-2 rounded">
              <label className="block font-bold text-gray-700">First Name</label>
              <div>{user.firstName}</div>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <label className="block font-bold text-gray-700">Last Name</label>
              <div>{user.lastName}</div>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <label className="block font-bold text-gray-700">Email address</label>
              <div>{user.email}</div>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <label className="block font-bold text-gray-700">Phone Number</label>
              <div>{user.phoneNumber}</div>
            </div>
          </div>
        </div>

        {/* Oblíbené recepty */}
        <div className="flex flex-col items-center">
          <label className="block font-bold text-gray-300 text-2xl">Created Recipes</label>
          {recipes.length === 0 ? (
            <p>Create your first one...</p>
          ) : (
            recipes.map((recipe, index) => (
              <div className="flex space-x-4" style={{ maxWidth: '100%' }}>
            <Link to={`/single-recipe/${recipe.id}`} key={index} className="transform transition-transform duration-300 hover:scale-105">
              <SmallRecipe
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
              />
            </Link>
        </div>
            ))
          )}
          <button
            onClick={handlePlusClick}
            className="mt-2 flex items-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
          </button>
        </div>
      </div>

      {/* Dialogs */}
      {isCreateRecipeDialogOpen && (
        <CreateRecipe closeDialog={closeCreateRecipeDialog} />
      )}
      {isUpdateUserDialogOpen && (
        <UpdateUser closeDialog={closeUpdateUserDialog} user={user} />
      )}
    </div>
  );
};

export default UserPage;
