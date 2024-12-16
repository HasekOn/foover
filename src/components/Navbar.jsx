import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onSearch, query }) => {
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    onSearch(newQuery);
  };

  return (
    <div className="mt-8 mx-6">
      {user ? (
        <div className="flex items-center justify-between">
          <Link to="/main" className="text-2xl font-semibold text-gray-800">
            Hi, <span className="text-teal-700 font-bold">{user.firstName}</span>!
          </Link>

          <div>
            <Link to="/user">
              <img
                src={user.image}
                alt="User Icon"
                className="w-10 h-10 rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <Link to="/main" className="text-2xl font-semibold text-gray-800">
            <span className="text-teal-700 font-bold">FOOVER!</span>
          </Link>

          <div>
            <Link to="/login">
              <img
                src={"/photo/unknown.png"}
                alt="User Icon"
                className="w-10 h-10 rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      )}

      <div className="mt-4">
        <input
          type="text"
          placeholder="Start searching..."
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    </div>
  );
};

export default Navbar;
