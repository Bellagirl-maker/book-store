import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { MdPerson } from 'react-icons/md';

const Navbar = () => (
  <div className="nav-bar">
    <nav className="navbar">
      <div className="nav-logo-links">
        <h1 className="logo">Bookstore CMS</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to="/categories" className="link">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-icon"><MdPerson className="user" /></div>
    </nav>
  </div>
);

export default Navbar;
