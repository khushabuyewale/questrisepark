// Details.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/QuestRiseLogo-removebg-preview.png';

const adminName = 'Unnati';
const DeleteRides = () => {
    const [selectedOption, setSelectedOption] = useState('delete');
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption((prevOption) => (prevOption === option ? 'delete' : option));
        setIsSubNavVisible(option !== 'delete'); // Show sub-navigation only when a main navigation item is clicked
    };


    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div style={styles.container}>
            {/* Vertical Navbar */}
            <div style={styles.verticalNavbar}>
                <div style={{ background: 'white', padding: '10px' }}>
                    <img
                        src={logo}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Logo"
                    />
                </div>

                <NavItem
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                    setIsSubNavVisible={setIsSubNavVisible}
                    to="/showBooking"
                >
                    SHOW
                    <SubNav isVisible={selectedOption === 'show'}>
                        <SubNavItem to="/showBooking">Booking</SubNavItem>
                        <SubNavItem to="/showRides">Rides</SubNavItem>
                        <SubNavItem to="/showTickets">Tickets</SubNavItem>
                        <SubNavItem to="/showMeals">Meals</SubNavItem>
                    </SubNav>
                </NavItem>

                <NavItem
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                    setIsSubNavVisible={setIsSubNavVisible}
                    to="/addRides"
                >
                    ADD
                    <SubNav isVisible={selectedOption === 'add'}>
                        <SubNavItem to="/addRides">Rides</SubNavItem>
                    </SubNav>
                </NavItem>

                <NavItem
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                    setIsSubNavVisible={setIsSubNavVisible}
                    to="/updateRides"
                >
                   UPDATE
                    <SubNav isVisible={selectedOption === 'update'}>
                        <SubNavItem to="/updateBooking">Booking</SubNavItem>
                        <SubNavItem to="/updateRides">Rides</SubNavItem>
                        <SubNavItem to="/updateTickets">Tickets</SubNavItem>
                        <SubNavItem to="/updateMeals">Meals</SubNavItem>

                    </SubNav>
                </NavItem>



                <NavItem
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                    setIsSubNavVisible={setIsSubNavVisible}
                    to="/deleteRides"
                >
                    DELETE
                    <SubNav isVisible={selectedOption === 'delete'}>
                        <SubNavItem to="/deleteBooking">Booking</SubNavItem>
                        <SubNavItem to="/deleteRides">Rides</SubNavItem>
                    </SubNav>
                </NavItem>

                <div className="text-center mt-3">
                    <a href="/admin"><button
                        className="btn btn-danger"
                        style={{ width: '80%', padding: '10px' }}
                        onClick={handleLogout}
                    >
                        Logout
                    </button> </a>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Horizontal Navbar */}
                <div style={styles.horizontalNavbar}>
                    <div style={styles.adminName}>
                        <b>
                            <i className="fas fa-user mr-2"></i> {adminName}
                        </b>
                    </div>
                </div>

                {/* Show Data */}
                <div style={styles.dataDisplay}>
                    {/* Your data display components go here */}
                    <p>Delete Rides</p>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ selectedOption, handleOptionClick, setIsSubNavVisible, to, children }) => (
    <div
        className={`nav-item ${selectedOption === to.replace('/', '') ? 'active' : ''}`}
        onClick={() => {
            handleOptionClick(to.replace('/', ''));
            setIsSubNavVisible(true);
        }}
        style={{ borderBottom: '1px solid #ddd', marginBottom: '5px' }}
    >
        <Link to={to} className="nav-link">
            {children}
        </Link>
    </div>
);

const SubNav = ({ isVisible, children }) => (
    <div className="pl-3" style={{
        display: isVisible ? 'block' : 'none',
        borderLeft: '1px solid #ddd',
        paddingLeft: '10px',
        marginBottom: '10px',
    }}>
        {children}
    </div>
);

const SubNavItem = ({ to, children }) => (
    <Link
        to={to}
        className="btn btn-light"
        style={{ display: 'block', marginBottom: '5px' }}
    >
        {children}
    </Link>
);

const styles = {
    container: {
        display: 'flex',
    },
    verticalNavbar: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        backgroundColor: '#333',
        height: '100vh',
        justifyContent: 'space-between',
        padding: '10px',
        color: 'white',
    },
    logo: {
        width: '100%',
        height: 'auto',
        marginBottom: '20px',
    },
    navItem: {
        cursor: 'pointer',
        marginBottom: '10px',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        transition: 'background-color 0.3s',
    },
    navItemActive: {
        backgroundColor: '#555',
    },
    subNav: {
        borderLeft: '1px solid #ddd',
        paddingLeft: '20px',
        marginBottom: '10px',
    },
    subNavItem: {
        display: 'block',
        marginBottom: '5px',
        transition: 'background-color 0.3s',
    },
    subNavItemButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        borderBottom: '1px solid #ddd',
        transition: 'background-color 0.3s',
    },
    subNavItemButtonActive: {
        backgroundColor: '#ddd',
    },
    logoutButton: {
        backgroundColor: 'red',
        padding: '10px',
        cursor: 'pointer',
        textAlign: 'center',
        borderTop: '1px solid #555',
    },
    mainContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    horizontalNavbar: {
        backgroundColor: '#ddd',
        padding: '20px',
        textAlign: 'right',
    },
    adminName: {
        color: 'black',
    },
    dataDisplay: {
        flex: 1,
        padding: '20px',
    },
};

export default DeleteRides;