// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    isbn: '',
    year: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="ml-72 mt-12 max-w-xl">
      <button className="text-blue-700 mb-4 hover:underline">&larr; Back to Books</button>
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Enter book title" className="w-full border p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Enter author name" className="w-full border p-2 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ISBN</label>
          <input type="text" name="isbn" value={form.isbn} onChange={handleChange} placeholder="Enter ISBN number" className="w-full border p-2 rounded focus:outline-blue-600" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Published Year</label>
          <input type="number" name="year" value={form.year} onChange={handleChange} placeholder="e.g. 2024" className="w-full border p-2 rounded" />
        </div>
        <div className="flex justify-between">
          <button type="button" className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
