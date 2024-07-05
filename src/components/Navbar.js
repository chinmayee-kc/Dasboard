import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <FaSearch className="search-icon" />
      </div>
      <div className="user-info">
        <div className="user-icon">🍔</div>
        <span className="user-name">Delicious Burger</span>
        <FaBell className="notification-icon" />
        <span className="notification-dot"></span>
      </div>
    </div>
  );
};

export default Navbar;

