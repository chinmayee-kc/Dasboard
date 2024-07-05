import React from 'react';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">G</div>
        <div className="logo-text">GOODFOOD</div>
      </div>
      <div className="menu-section">
        <p className="section-title">MENU</p>
        <ul className="menu-list">
          <li className="menu-item">
            <i className="menu-icon bi bi-bar-chart"></i>
            Dashboard
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-cart"></i>
            Food Order
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-file-earmark-text"></i>
            Manage Menu
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-chat"></i>
            Customer Review
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <p className="section-title">OTHERS</p>
        <ul className="menu-list">
          <li className="menu-item">
            <i className="menu-icon bi bi-gear"></i>
            Settings
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-credit-card"></i>
            Payment
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-person"></i>
            Accounts
          </li>
          <li className="menu-item">
            <i className="menu-icon bi bi-question-circle"></i>
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

