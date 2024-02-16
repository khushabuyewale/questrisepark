import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/icon.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(#f6dae4 ,#d0d5f7)', marginBottom: '5px' }}>
      <div className="container">
        {/* Left side with website name and icon */}
        <div className="navbar-brand">
          <img
            src={icon}
            alt="Icon"
            style={{ width: '70px' }}
          />

          <span style={{ fontWeight: 'bold', fontSize: '2.0rem' }}>    Quest-Rise </span>
        </div>


        {/* Right side with navigation links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav">
            <li>
              <div className="navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
