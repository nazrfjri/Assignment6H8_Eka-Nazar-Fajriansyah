import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { FaFilm } from 'react-icons/fa';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-orange-700 text-zinc-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaFilm className="text-3xl" />
        <Link to="/" className="text-2xl font-bold">E-Cinema</Link>
      </div>
      <button
        onClick={handleAuthAction}
        className="bg-zinc-200 text-orange-500 px-4 py-2 rounded hover:bg-zinc-300"
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
