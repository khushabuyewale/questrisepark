// SubNavbar.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const SubNavbar = () => {
    return (
        <div className="sub-navbar d-flex" style={{ background: '#f5f5f5', padding: '10px', position: 'sticky', top: '80px', zIndex: '999' }}>
            <ScrollLink to="Carousel" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Carousel</ScrollLink>
            <ScrollLink to="images" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Images</ScrollLink>
            <ScrollLink to="todo" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">To-Do’s</ScrollLink>
            <ScrollLink to="food" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Food</ScrollLink>
            <ScrollLink to="reviews" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">Reviews</ScrollLink>
            <ScrollLink to="aboutus" smooth={true} duration={500} offset={-80} className="nav-link" style={linkStyle} spy={true} activeClass="active">About Us</ScrollLink>
            {/* Add more links as needed */}
        </div>
    );
};

const linkStyle = {
    fontSize: '16px',
    paddingRight: '20px',
    color: 'black',
    margin: '2px',
    transition: 'color 0.3s', // Add a smooth transition effect on color change
    cursor: 'pointer',
};

export default SubNavbar;
