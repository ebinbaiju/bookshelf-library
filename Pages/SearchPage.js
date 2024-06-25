// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import BookList from '../Components/BookList';
import './SearchPage.css'; // Import external CSS file

const SearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchBooks = async () => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setBooks(response.data.docs);
      };
      fetchBooks();
    }
  }, [query]);

  return (
    <div className="search-page">
      <SearchBar query={query} setQuery={setQuery} />
      <BookList books={books} addToBookshelf={addToBookshelf} />
      <button className="goto-bookshelf-btn" onClick={() => window.location.href = '/bookshelf'}>
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
