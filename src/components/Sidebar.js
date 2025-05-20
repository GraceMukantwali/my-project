
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col justify-between fixed">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Book Manager</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/" className="hover:underline">📚 All Books</Link>
            </li>
            <li>
              <Link to="/add-book" className="hover:underline font-semibold bg-blue-600 px-3 py-2 rounded-md block">➕ Add New Book</Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="p-4 text-sm text-gray-300">
        © 2025 Book Management System
      </footer>
    </div>
  );
};

export default Sidebar;
