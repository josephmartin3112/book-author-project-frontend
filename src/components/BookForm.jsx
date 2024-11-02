import React, { useState } from 'react';

const BookForm = () => {
  const [book, setBook] = useState({
    name: '',
    price: '',
    author: '',
    publishedYear: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/books/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });

      if (response.ok) {
        alert("Book added successfully!");
        setBook({ name: '', price: '', author: '', publishedYear: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        console.error("Error adding book:", errorData);
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          value={book.name} 
          onChange={handleChange} 
          placeholder="Book Name" 
          required 
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          type="number" 
          name="price" 
          value={book.price} 
          onChange={handleChange} 
          placeholder="Price" 
          required 
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          type="text" 
          name="author" 
          value={book.author} 
          onChange={handleChange} 
          placeholder="Author" 
          required 
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input 
          type="number" 
          name="publishedYear" 
          value={book.publishedYear} 
          onChange={handleChange} 
          placeholder="Published Year" 
          required 
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
