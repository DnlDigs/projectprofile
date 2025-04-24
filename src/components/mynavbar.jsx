import React from 'react';
import { Link } from 'react-router-dom';

const Mynavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Mynavbar;
