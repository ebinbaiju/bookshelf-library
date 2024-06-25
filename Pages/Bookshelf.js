// src/pages/Bookshelf.js
import React, { useEffect, useState } from 'react';
import './Bookshelf.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookKey) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      {bookshelf.length === 0 ? (
        <p>Your bookshelf is empty.</p>
      ) : (
        <div className="book-list">
          {bookshelf.map((book) => (
            <div key={book.key} className="book-card">
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : 'https://via.placeholder.com/150'
                }
                alt={`${book.title} cover`}
              />
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(', ')}</p>
              <button onClick={() => removeFromBookshelf(book.key)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
