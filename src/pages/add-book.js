// src/pages/add-book.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import BookForm from '../components/BookForm';

const AddBookPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BookForm />
    </div>
  );
};

export default AddBookPage;
