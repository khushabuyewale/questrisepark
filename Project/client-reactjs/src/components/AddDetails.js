import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AddDetails = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const adminName = 'Unnati';

    const handleLogout = () => {
        // Implement your logout logic here
        console.log('Logging out...');
    };
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <nav
                style={{
                    width: sidebarVisible ? '250px' : '30px',
                    transition: 'width 0.3s ease',
                    background: 'white',
                }}
            >
                {/* Toggle button for collapsing/expanding sidebar */}
                <div style={{ textAlign: 'left', padding: '5px', marginTop: '60px' }}>
                    <button onClick={toggleSidebar}>
                        {sidebarVisible ? (
                            <FontAwesomeIcon icon={faChevronLeft} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronRight} />
                        )}

                    </button>
                </div>
                <ul style={{ listStyle: 'none', padding: '20px' }}>
                    <li style={{
                        margin: '10px 0',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}>
                        <a href="/show" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                            <h3>Show</h3>
                        </a>
                    </li>
                    <li style={{
                        margin: '10px 0',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}>
                        <a href="/add" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                            <h3>Add</h3>
                        </a>
                    </li>
                    <li style={{
                        margin: '10px 0',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}>
                        <a href="/update" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                            <h3>Update</h3>
                        </a>
                    </li>
                    <li style={{
                        margin: '10px 0',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    }}>
                        <a href="/delete" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>
                            <h3>Delete</h3>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='/admin'>
                            <button style={{
                                width: '100%',
                                padding: '5px',
                                background: 'linear-gradient(#957dad ,#d291bc)',
                                margin: '2px',
                                border: 'solid',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }} onClick={handleLogout}>
                                Logout
                            </button>
                        </a>
                    </li>
                </ul>


            </nav>

            <main style={{ flex: 1 }}>
                <div
                    style={{
                        background: 'radial-gradient(circle, #f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)',
                        height: '100%',
                        padding: '20px',

                    }}
                >
                    <div style={{ marginTop: '100px' }}>
                        <h2 style={{ textAlign: 'center' }}>Add Details</h2>
                        {/* Add more content as needed */}
                    </div>
                </div>
            </main>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" style={{ background: 'linear-gradient(#f6dae4 ,#d0d5f7)' }}>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#admin" style={{ color: 'black' }}>
                                <i className="fas fa-user mr-2"></i> {adminName}
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AddDetails;
