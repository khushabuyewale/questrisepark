// Details.js

import React, { useState } from 'react';

import logo from '../assets/QuestRiseLogo-removebg-preview.png';

const adminName = 'Unnati';
const ShowDetails = () => {
    const [selectedOption, setSelectedOption] = useState('select');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };

    return (
        <div style={styles.container}>
            {/* Vertical Navbar */}

            <div style={styles.verticalNavbar}>
                <div style={{ background: 'white' }}>
                    <img src={logo}
                        style={{ width: '150px', height: '80px', background: 'white' }}
                    ></img>
                </div>

                <div
                    style={{
                        ...styles.navItem,
                        backgroundColor: selectedOption === 'select' ? '#333' : 'transparent',
                    }}
                    onClick={() => handleOptionClick('select')}
                > <a href="/show" style={{color: 'white', textDecoration: 'none' }}>
                        Show
                    </a> </div>
                <div
                    style={{
                        ...styles.navItem,
                        backgroundColor: selectedOption === 'add' ? '#333' : 'transparent',
                    }}
                    onClick={() => handleOptionClick('add')}
                >
                    <a href="/add" style={{ color: 'white',textDecoration: 'none' }}>
                        Add
                    </a>
                </div>
                <div
                    style={{
                        ...styles.navItem,
                        backgroundColor: selectedOption === 'update' ? '#333' : 'transparent',
                    }}
                    onClick={() => handleOptionClick('update')}
                >
                    <a href="/update" style={{ color: 'white',textDecoration: 'none' }}>
                        Update
                    </a>
                </div>
                <div
                    style={{
                        ...styles.navItem,
                        backgroundColor: selectedOption === 'delete' ? '#333' : 'transparent',
                    }}
                    onClick={() => handleOptionClick('delete')}
                >
                    <a href="/delete" style={{ color: 'white',textDecoration: 'none' }}>
                        Delete
                    </a>
                </div>
                <div style={styles.logoutButton} onClick={handleLogout}>
                    <a href="/admin" style={{color: 'white', textDecoration: 'none' }}>
                        Logout
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Horizontal Navbar */}
                <div style={styles.horizontalNavbar}>
                    <div style={styles.adminName}>
                        <b><a className="navbar-brand" href="#admin" >
                            <i className="fas fa-user mr-2"></i> {adminName}
                        </a>
                        </b>
                    </div>
                </div>

                {/* Show Data */}
                <div style={styles.dataDisplay}>
                    {/* Your data display components go here */}
                    <p>Show Details</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
    },
    verticalNavbar: {
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        backgroundColor: '#444',
        height: '100vh', // Set the height to fill the entire viewport
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    },
    navItem: {
        padding: '50px',
        color: 'white',
        cursor: 'pointer',
        height: '100%',
        borderBottom: '1px solid #555',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    logoutButton: {
        padding: '10px',
        color: 'white',
        backgroundColor: 'red',
        cursor: 'pointer',
        borderTop: '1px solid #555',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    mainContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    horizontalNavbar: {
        backgroundColor: '#dddddd',
        padding: '28px',
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



export default ShowDetails;  