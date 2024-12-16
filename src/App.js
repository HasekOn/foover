import './App.css';
import Navbar from './components/Navbar';
import WelcomeImage from './components/WelcomeImage';
import PopularRecipes from './components/PopularRecipes';
import Login from './components/Login';
import SingleRecipe from './components/SingleRecipe';
import UserPage from './components/UserPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SmallRecipe from './components/SmallRecipe';
import { Link } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('/data/recipes.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
  
    const results = recipes.filter(recipe => 
      recipe.title && recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };
  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/main" element={<MainPage recipes={recipes} user={user} onSearch={handleSearch} searchResults={searchResults} />} />
          <Route path="/single-recipe/:id" element={<SingleRecipe recipes={recipes} user={user} />} />
          <Route path="/user" element={user ? <UserPage user={user}/> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainPage({ recipes, user, onSearch, searchResults }) {
  const shouldShowResults = searchResults.length > 0 && searchResults.query !== '';

  return (
    <>
      <Navbar user={user} onSearch={onSearch} />
      {shouldShowResults && (
        <div className="search-results flex flex-wrap justify-center">
          {searchResults.map((recipe, index) => (
            <div key={index} className="flex-none w-1/5 p-2">
              <Link to={`/single-recipe/${recipe.id}`} className="block transform transition-transform duration-300 hover:scale-105">
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
      <WelcomeImage />
      <PopularRecipes recipes={recipes} />
    </>
  );
}




export default App;
