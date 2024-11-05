import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://localhost:8081/books/authors");
        if (response.ok) {
          const data = await response.json();
          setAuthors(data);
        } else {
          console.error("Error fetching authors:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleAuthorSelect = (e) => {
    const selectedAuthor = e.target.value;
    if (selectedAuthor) {
      navigate(`/books/author/${selectedAuthor}`);
    }
  };

  return (
    <div className="relative bg-gradient-to-tr from-pink-200 via-purple-300 to-indigo-400 min-h-screen flex flex-col items-center px-6 pt-20 lg:px-8">
      <div className="absolute inset-0 -z-10 blur-3xl overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 w-[36rem] h-[36rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 rounded-full transform -translate-x-1/2 rotate-45"
        />
      </div>
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
        Welcome to the Book Store
      </h1>
      <nav className="flex flex-col items-center sm:flex-row gap-8 mb-8">
        <Link
          to="/add"
          className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-150"
        >
          Add Book
        </Link>
        <Link
          to="/books"
          className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-150"
        >
          View All Books
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-lg font-medium">View Books by Author:</span>
          <select
            onChange={handleAuthorSelect}
            defaultValue=""
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Author
            </option>
            {authors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </nav>
      <div className="flex justify-center">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
