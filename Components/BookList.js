// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ books, addToBookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
};

export default BookList;
