import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import BookList from '../Components/BookList';
import './Home.css'; // Ensure this path is correct based on your project structure

const Home = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      const response = await axios.get('https://openlibrary.org/subjects/fantasy.json?limit=5');
      setFeaturedBooks(response.data.works);
    };
    fetchFeaturedBooks();
  }, []);

  useEffect(() => {
    if (query) {
      const fetchBooks = async () => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setBooks(response.data.docs);
      };
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const updatedBookshelf = [...storedBookshelf, book];
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    alert(`${book.title} added to bookshelf!`);
  };

  const clearSearch = () => {
    setQuery('');
    setBooks([]);
  };

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-content">
          <div className="title-search">
            <h1>Welcome to Storybook Corner</h1>
            <p>Your personal library at your fingertips.</p>
            <SearchBar query={query} setQuery={setQuery} />
            <img src="./images/Screenshot 2024-06-24 114419.png" alt="Logo" />
          </div>
        </div>
      </header>

      <section className="reading-quotes mt-3 ">
        <div className="quotes">
          <div className="quote">
            <img src="./images/images.jpeg" alt="Marcus Tullius Cicero" className="quote-image" />
            <div className="quote-content">
              <p>"A room without books is like a body without a soul."</p>
              <h4>- Marcus Tullius Cicero</h4>
            </div>
          </div>
          <div className="quote">
            <img src="./images/download.webp" alt="Albert Einstein" className="quote-image" />
            <div className="quote-content">
              <p>"The only thing that you absolutely have to know, is the location of the library."</p>
              <h4>- Albert Einstein</h4>
            </div>
          </div>
          <div className="quote">
            <img src="./images/download.jpeg" alt="Jorge Luis Borges" className="quote-image" />
            <div className="quote-content">
              <p>"I have always imagined that Paradise will be a kind of library."</p>
              <h4>- Jorge Luis Borges</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="featured-book-list">
          {featuredBooks.map((book) => (
            <div key={book.key} className="featured-book-card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                alt={book.title}
                className="book-cover"
              />
              <h3>{book.title}</h3>
              <p>{book.authors.map(author => author.name).join(', ')}</p>
            </div>
          ))}
        </div>
      </section>
      {books.length > 0 && (
        <div className="search-results-container">
          <button className="back-button" onClick={clearSearch}>Back</button>
          <div className="search-results">
            <BookList books={books} addToBookshelf={addToBookshelf} />
          </div>
        </div>
      )}
      
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          <div className="review">
            <p>"Amazing collection! I found all my favorite books in one place."</p>
            <div className="star-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <h4>- Jane Doe</h4>
          </div>
          <div className="review">
            <p>"The interface is very user-friendly and the search feature works perfectly."</p>
            <div className="star-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <h4>- John Smith</h4>
          </div>
          <div className="review">
            <p>"Highly recommend this site for book lovers!"</p>
            <div className="star-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <h4>- Alice Johnson</h4>
          </div>
          <div className="review">
            <p>"Great selection and easy navigation."</p>
            <div className="star-rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <h4>- Michael Brown</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
