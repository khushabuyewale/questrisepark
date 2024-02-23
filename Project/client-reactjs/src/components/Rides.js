// Rides.js

import React from 'react';

import RidesBG from '../assets/RidesBG.png';

const RidesTable = ({ rides }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',

  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor:''
  };

  const headerCellStyle = {
    backgroundColor: '#f2f2f2',
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
    <div style={{height:'100vh', backgroundImage:`url(${RidesBG})`,backgroundSize:'cover',color:'black',textSizeAdjust:'3px'}}>
   <table style={{tableStyle, width:'80vw', margin:'0 auto',marginTop:'30px'}}>
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
    <div style={containerStyle}>
      <h1>Rides Information</h1>
      <RidesTable rides={rides} />
    </div>
  );
};

export default Rides;
