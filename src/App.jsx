import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<BookList authorName={null} />} />
          <Route path="/books/author/:authorName" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
