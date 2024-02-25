// Details.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/QuestRiseLogo-removebg-preview.png';

const adminName = 'Admin';

const ShowMeals = () => {
    const [selectedOption, setSelectedOption] = useState('show');
    const [isSubNavVisible, setIsSubNavVisible] = useState(false);
    const [data, setData] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption((prevOption) => (prevOption === option ? 'show' : option));
        setIsSubNavVisible(option !== 'show'); // Show sub-navigation only when a main navigation item is clicked
    };


    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logout clicked');
    };
    // useEffect to fetch data from backend
    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                // Construct your backend API URL with selectedDate and selectedParkType
                const apiURL = `your_backend_api_url?date=${selectedDate}`;
                const response = await fetch(apiURL);
                const result = await response.json();

                // Auto-generate srno and update state with fetched data
                const newData = result.map((item, index) => ({ ...item, srno: (index + 1).toString() }));
                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, [fromDate, toDate]);

    // Function to handle from date selection
    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
    };

    // Function to handle to date selection
    const handleToDateChange = (event) => {
        setToDate(event.target.value);
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
                        <SubNavItem to="/showPayement">Payment</SubNavItem>
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
                    to="/updateBooking"
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
                    to="/deleteBooking"
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
                    <div style={{ marginBottom: '20px' }}>
                        <label><b>Select Date Range</b>   from:</label>
                        <input type="date" value={fromDate} onChange={handleFromDateChange} />
                        <label style={{ marginLeft: '20px' }} >  to:</label>
                        <input type="date" value={toDate} onChange={handleToDateChange} />
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <thead style={{ backgroundColor: '#00416B', color: 'white' }}>
                            <tr>
                                <th>Sr.no.</th>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Breakfast</th>
                                <th>Lunch</th>
                                <th>Snacks</th>
                                <th>Dinner</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.srno}>
                                    <td>{row.srno}</td>
                                    <td>{row.id}</td>
                                    <td>{row.date}</td>
                                    <td>{row.name}</td>
                                    <td>{row.breakfast}</td>
                                    <td>{row.lunch}</td>
                                    <td>{row.snacks}</td>
                                    <td>{row.dinner}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Summary Section */}
                    <h4 style={{
                        backgroundColor: '#333',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'row',  // Change to row to place items horizontally
                        justifyContent: 'space-between',
                        alignItems: 'center',  // Align items vertically at the center
                        padding: '10px',
                        margin: '10px 0',
                    }}>
                        <div>
                            <b>Total Count</b>
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            Breakfast: {data.reduce((total, row) => total + row.breakfast, 0)}
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            Lunch: {data.reduce((total, row) => total + row.lunch, 0)}
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            Snacks: {data.reduce((total, row) => total + row.snacks, 0)}
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            Dinner: {data.reduce((total, row) => total + row.dinner, 0)}
                        </div>
                    </h4>

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


export default ShowMeals;