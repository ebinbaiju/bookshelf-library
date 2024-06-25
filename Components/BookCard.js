// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, addToBookshelf }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-card">
      <img src={coverImage} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
