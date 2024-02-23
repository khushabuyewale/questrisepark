// SubNavbar.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SubNavbar = () => {
    return (
        <div className="sub-navbar d-flex" style={{ background: '#0e2f44', padding: '10px', position: 'sticky', top: '80px', zIndex: '999', display: 'flex', justifyContent: 'center',gap:'60px' }}>
            <ScrollLink to="Carousel" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">What's New</ScrollLink>
            <ScrollLink to="todo" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">To-Do’s</ScrollLink>
            <ScrollLink to="food" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Food</ScrollLink>
            <ScrollLink to="review" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Reviews</ScrollLink>
            <ScrollLink to="aboutus" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">About Us</ScrollLink>
            {/* Add more links as needed */}
        </div>
    );
};

const linkStyle = {
    fontSize: '16px',
    paddingRight: '20px',
    color: 'white',
    margin: '2px',
    transition: 'color 0.3s', // Add a smooth transition effect on color change
    cursor: 'pointer',
};

export default SubNavbar;
