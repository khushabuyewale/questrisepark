import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/QuestRiseLogo.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{marginBottom: '5px', position:'fixed', zIndex:1000, background:'white', width:'100%',height:'100px' }}>
      <div className="container">
        {/* Left side with website name and icon */}
        <div className="navbar-brand">
          <img
            src={icon}
            alt="QuestRiseLogo"
            style={{ width: '200px' }}
          />
        </div>


        {/* Right side with navigation links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav">
            <li >
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
