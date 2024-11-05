import React, { useEffect, useState } from "react";

const BookList = ({ authorName }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = authorName
        ? `http://localhost:8081/books/author/${authorName}`
        : `http://localhost:8081/books/allBooks`;

      try {
        const response = await fetch(url);

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

    fetchBooks();
  }, [authorName]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        {authorName ? `Books by ${authorName}` : "All Books"}
      </h2>
      {books.length > 0 ? (
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book.id || book.name}
              className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">
                {book.name}
              </span>
              <span className="text-sm text-gray-600">${book.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No books found.</p>
      )}
    </div>
  );
};

export default BookList;
