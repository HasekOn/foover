import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const UpdateUser = ({ closeDialog, user }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:w-1/3">
        <h3 className="text-xl font-bold mb-4">Edit User Information</h3>
        <form>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Image
            </label>
            {user.image ? (
              <div className="relative w-320 h-320 mb-4"> 
              <img src={user.image} alt="User Profile" className="w-full h-full object-cover" /> 
              <div className="absolute rounded inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"> 
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              defaultValue={user.firstName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              defaultValue={user.lastName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={user.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue={user.phoneNumber}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
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

export default UpdateUser;
