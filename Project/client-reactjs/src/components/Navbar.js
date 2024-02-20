import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/QuestRiseLogo-removebg-preview.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{marginBottom: '5px', position:'fixed', zIndex:1000, background:'#dddddd', width:'100%',height:'80px' }}>
      <div className="container" >
        {/* Left side with website name and icon */}
        <div className="navbar-brand">
          <img
            src={icon}
            alt="QuestRiseLogo"
            style={{ width: '85px' }}
          />
        </div>

        {/* Right side with navigation links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <b><ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{fontSize:'20px', color:'black', margin:'10px'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs" style={{fontSize:'20px', color: 'black', margin:'10px'}}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking" style={{fontSize:'20px', color:'black', margin:'10px'}}><u>Book Now</u></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" style={{fontSize:'20px', color:'black', margin:'10px'}}>Admin</Link>
            </li>
            
          </ul></b>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
