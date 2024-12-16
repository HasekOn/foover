import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('/data/users.json')
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          setUser(user);
          navigate('/user');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-600 ">
      <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/3 sm:w-2/3 w-full">
      <Link to="/main">
      <h2 className="text-3xl font-extrabold text-center text-teal-600 mb-6 hover:text-teal-800 hover:scale-105 transition-transform duration-300">FOOVER</h2>
        </Link>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-teal-600 font-bold hover:bg-teal-700 text-white p-2 rounded w-full">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
