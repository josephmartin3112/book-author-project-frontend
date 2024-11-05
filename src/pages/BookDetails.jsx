import React from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList';

const BookDetails = () => {
  const { authorName } = useParams(); // Get authorName from URL params

  return (
    <div>
      <BookList authorName={authorName} />
    </div>
  );
};

export default BookDetails;
