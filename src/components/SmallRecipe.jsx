import React from 'react';

const SmallRecipe = ({ image, title, time }) => {
  return (
    <div className="flex flex-col items-start bg-white rounded shadow-md p-4 w-64">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-600">{time}</p>
    </div>
  );
};

export default SmallRecipe;
