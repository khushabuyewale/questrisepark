// Rides.js

import React from 'react';
import RidesBG from '../assets/RidesBG.png';

const RidesTable = ({ rides }) => {
  const cellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  };

  const headerCellStyle = {
    backgroundColor: '#f2f2f2',
    borderBottom: '2px solid #ddd',
    position: 'sticky',
    top: '0',
    zIndex: '1',
  };

  const tableContainerStyle = {
    margin: '20px auto',
    maxWidth: '80vw',
    overflowY: 'auto',
    height: '600px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px', // Add margin from the top
    border: '1px solid #ddd',
  };

  const scrollbarStyle = {
    paddingRight: '17px',
    marginTop: '10px',
    overflowY: 'scroll', // Make the tbody scrollable
    height: '500px', // Set the height for the tbody
  };

  const getCellStyle = (rideType) => {
    // Define additional styles based on ride type
    if (rideType === 'Water Park') {
      return { backgroundColor: '#b3e0ff' }; // Example background color for water park rides
    }
    
    // Add more conditions as needed
    return {};
  };
  return (
     <div style={{ backgroundImage: `url(${RidesBG})`, backgroundSize: 'cover' }}>
      <div style={{ height: '100vh', color: 'black', fontSize: '16px' }}>
        <div style={tableContainerStyle}>
          <table style={{ ...tableStyle, ...scrollbarStyle }}>
            <thead>
              <tr>
            <th style={{ ...cellStyle, ...headerCellStyle }}>Sr. No.</th>
            <th style={{ ...cellStyle, ...headerCellStyle }}>Ride Name</th>
            <th style={{ ...cellStyle, ...headerCellStyle }}>Ride Type</th>
            <th style={{ ...cellStyle, ...headerCellStyle }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride, index) => (
            <tr key={index} style={getCellStyle(ride.type)}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{ride.name}</td>
              <td style={cellStyle}>{ride.type}</td>
              <td style={cellStyle}>{ride.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

const Rides = () => {

  const containerStyle = {
    textAlign: 'center',
  };

  // Updated rides data
  const rides = [
    { name: 'Roller Coaster', type: 'Theme Park', description: 'Thrilling ride with twists and turns.' },
    { name: 'Lazy River', type: 'Water Park', description: 'Relaxing water ride with a gentle current.' },
    
    { name: 'Ferris Wheel', type: 'Theme Park', description: 'Slow and scenic ride with a great view.' },
    { name: 'Wave Pool', type: 'Water Park', description: 'Experience the excitement of ocean-like waves.' },
    
    
    // Add more rides as needed
  ];

  return (
    <>
      <div style={containerStyle}>
        <div>
          <h1>Rides Information</h1>
          <RidesTable rides={rides} />
        </div>
      </div>
    </>
  );
};

export default Rides;
