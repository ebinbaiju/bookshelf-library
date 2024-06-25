// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link className="logo-link">STORYBOOK CORNER</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/bookshelf" className="nav-link">My Bookshelf</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
