import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleRecipeIntro from './SingleRecipeIntro';
import SingleRecipeInfo from './SingleRecipeInfo';
import PopularRecipes from './PopularRecipes';
import Navbar from './Navbar';
import SmallRecipe from './SmallRecipe';

const SingleRecipe = ({ recipes, user }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id.toString() === id);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  if (!recipe) return <div className="container mx-auto p-4">No recipe found.</div>;

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = recipes.filter(recipe =>
      recipe.title && recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setQuery(query);
  };

  const resetSearch = () => {
    setSearchResults([]);
    setQuery('');
  };

  return (
    <div className="container mx-auto p-4">
  <Navbar user={user} onSearch={handleSearch} query={query} />
  {searchResults.length > 0 && (
    <div className="search-results flex flex-wrap justify-center items-center">
      {searchResults.map((recipe, index) => (
        <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <Link to={`/single-recipe/${recipe.id}`} className="block transform transition-transform duration-300 hover:scale-105" onClick={resetSearch}>
            <SmallRecipe
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          </Link>
        </div>
      ))}
    </div>
  )}
  <SingleRecipeIntro recipe={recipe} user={user} />
  <SingleRecipeInfo recipe={recipe} />
  <PopularRecipes recipes={recipes} />
</div>

  );
};

export default SingleRecipe;
