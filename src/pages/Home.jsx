import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Book Store</h1>
    <nav>
      <Link to="/add">Add Book</Link> | 
      <Link to="/books/author/JK Rowling">View Books by JK Rowling</Link>
    </nav>
  </div>
);

export default Home;
