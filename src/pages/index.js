// src/pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-72 p-10">
        <h1 className="text-3xl font-bold">All Books</h1>
        {/* List of books goes here */}
      </div>
    </div>
  );
};

export default HomePage;
