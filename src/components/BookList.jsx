import React, { useEffect, useState } from 'react';

const BookList = ({ authorName }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:8081/books/author/${authorName}`);

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          console.error("Error fetching books:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks(); // Fetch books whenever authorName changes
  }, [authorName]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name} - ${book.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
