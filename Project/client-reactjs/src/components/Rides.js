// Rides.js

import React, { useEffect, useState } from "react";

const RidesTable = ({ rides }) => {
  const cellStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  };

  const headerCellStyle = {
    backgroundColor: "#f2f2f2",
    borderBottom: "2px solid #ddd",
    position: "sticky",
    top: "0",
    zIndex: "1",
  };

  const tableContainerStyle = {
    margin: "20px auto",
    maxWidth: "80vw",
    overflowY: "auto",
    height: "600px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px", // Add margin from the top
    border: "1px solid #ddd",
  };

  const scrollbarStyle = {
    paddingRight: "17px",
    marginTop: "10px",
    overflowY: "scroll", // Make the tbody scrollable
    height: "500px", // Set the height for the tbody
  };

  const getCellStyle = (rideType) => {
    // Define additional styles based on ride type
    if (rideType === "water park") {
      return { backgroundColor: "#b3e0ff" }; // Example background color for water park rides
    }

    // Add more conditions as needed
    return {};
  };
  return (
    <div
      style={{ backgroundColor:'darkgray'}}
    >
      <div style={{ height: "100vh", color: "black", fontSize: "16px" }}>
        <div style={tableContainerStyle}>
          <table style={{ ...tableStyle, ...scrollbarStyle }}>
            <thead>
              <tr>
                <th style={{ ...cellStyle, ...headerCellStyle }}>Sr. No.</th>
                <th style={{ ...cellStyle, ...headerCellStyle }}>Ride Name</th>
                <th style={{ ...cellStyle, ...headerCellStyle }}>Ride Type</th>
                <th style={{ ...cellStyle, ...headerCellStyle }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {rides.map((ride, index) => (
                <tr key={index} style={getCellStyle(ride.type)}>
                  <td style={cellStyle}>{index + 1}</td>
                  <td style={cellStyle}>{ride.ride_Name}</td>
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
  const [data, setData] = useState([]);

  // useEffect to fetch data from backend
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        // Assuming you have an API endpoint to fetch data
        const response = await fetch(
          "http://localhost:5293/api/showride/showrides"
        );
        const result = await response.json();

        // Auto-generate srno and update state with fetched data
        const newData = result.map((item, index) => ({
          ...item,
          srno: (index + 1).toString(),
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const containerStyle = {
    textAlign: "center",
  };

  return (
    <>
      <div style={containerStyle}>
        <div>
          <h1>Rides Information</h1>
          <RidesTable rides={data} />
        </div>
      </div>
    </>
  );
};

export default Rides;
