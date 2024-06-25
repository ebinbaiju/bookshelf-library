// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for a book..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
