// Details.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/QuestRiseLogo-removebg-preview.png";

const adminName = "Admin";

const ShowPayement = () => {
  const [selectedOption, setSelectedOption] = useState("show");
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [ticketData, setTicketData] = useState([]);
  const [mealData, setMealData] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOption((prevOption) =>
      prevOption === option ? "show" : option
    );
    setIsSubNavVisible(option !== "show"); // Show sub-navigation only when a main navigation item is clicked
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        // Assuming you have an API endpoint to fetch data
        const response = await fetch(
          "http://localhost:5293/api/payment/showpayment"
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
  }, []);

  // useEffect(() => {
  //     const fetchTicketData = async () => {
  //         // Fetch ticket data from the backend API
  //         try {
  //             const ticketApiURL = `your_ticket_backend_api_url?fromDate=${fromDate}&toDate=${toDate}`;
  //             const ticketResponse = await fetch(ticketApiURL);
  //             const ticketResult = await ticketResponse.json();
  //             const newTicketData = ticketResult.map((item, index) => ({ ...item, srno: (index + 1).toString() }));
  //             setTicketData(newTicketData);
  //         } catch (error) {
  //             console.error('Error fetching ticket data:', error);
  //         }
  //     };

  //     const fetchMealData = async () => {
  //         // Fetch meal data from the backend API
  //         try {
  //             const mealApiURL = `your_meal_backend_api_url?fromDate=${fromDate}&toDate=${toDate}`;
  //             const mealResponse = await fetch(mealApiURL);
  //             const mealResult = await mealResponse.json();
  //             const newMealData = mealResult.map((item, index) => ({ ...item, srno: (index + 1).toString() }));
  //             setMealData(newMealData);
  //         } catch (error) {
  //             console.error('Error fetching meal data:', error);
  //         }
  //     };

  // Call both fetch functions
  //     fetchTicketData();
  //     fetchMealData();
  // }, [fromDate, toDate]);

  // Function to handle from date selection
  // Function to handle from date selection
  const handleFromDateChange = (event) => {
    const selectedFromDate = event.target.value;

    // Ensure selectedFromDate is greater than or equal to toDate
    if (selectedFromDate <= toDate) {
      // You can optionally show a message or perform another action here
      console.error("From date should be greater than the to date.");
    } else {
      setFromDate(selectedFromDate);
    }
  };

  // Function to handle to date selection
  const handleToDateChange = (event) => {
    const selectedToDate = event.target.value;

    // Ensure toDate is less than or equal to fromDate
    if (selectedToDate <= fromDate) {
      // You can optionally show a message or perform another action here
      console.error("To date should be less than the from date.");
    } else {
      setToDate(selectedToDate);
    }
  };

  return (
    <div style={styles.container}>
      {/* Vertical Navbar */}
      <div style={styles.verticalNavbar}>
        <div style={{ background: "white", padding: "10px" }}>
          <img
            src={logo}
            style={{ width: "100%", height: "auto" }}
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
          <SubNav isVisible={selectedOption === "show"}>
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
          <SubNav isVisible={selectedOption === "add"}>
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
          <SubNav isVisible={selectedOption === "update"}>
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
          <SubNav isVisible={selectedOption === "delete"}>
            <SubNavItem to="/deleteBooking">Booking</SubNavItem>
            <SubNavItem to="/deleteRides">Rides</SubNavItem>
          </SubNav>
        </NavItem>

        <div className="text-center mt-3">
          <Link to="/admin">
            <button
              className="btn btn-danger"
              style={{ width: "80%", padding: "10px" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
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
          <div style={{ marginBottom: "20px" }}>
            <label>
              <b>Select Date Range</b> from:{" "}
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
            />
            <label style={{ marginLeft: "20px" }}> to: </label>
            <input type="date" value={toDate} onChange={handleToDateChange} />
          </div>

          <div style={{ display: "flex", marginBottom: "20px" }}>
            {/* Ticket Table */}
            <div style={{ flex: "1", marginRight: "2%" }}>
              <h4>Ticket Table</h4>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead style={{ backgroundColor: "#00416B", color: "white" }}>
                  <tr>
                    <th>Sr.no.</th>
                    <th>Name</th>
                    <th>Ticket Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ticket) => (
                    <tr key={ticket.srno}>
                      <td>{ticket.srno}</td>
                      <td>{ticket.name}</td>
                      <td>{ticket.ticket_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Display total amount of tickets */}
              <div
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <b>Total Tickets Price:</b>{" "}
                {data.reduce(
                  (total, data) => total + parseFloat(data.ticket_amount),
                  0
                )}
              </div>
            </div>

            {/* Meal Table */}
            <div style={{ flex: "1" }}>
              <h4>Meal Table</h4>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead style={{ backgroundColor: "#00416B", color: "white" }}>
                  <tr>
                    <th>Sr.no.</th>
                    <th>Name</th>
                    <th>Meal Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((meal) => (
                    <tr key={meal.srno}>
                      <td>{meal.srno}</td>
                      <td>{meal.name}</td>
                      <td>{meal.meal_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Display total amount of meals */}
              <div
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  padding: "10px",
                  margin: "10px 0",
                }}
              >
                <b>Total Meals Price:</b>{" "}
                {data.reduce(
                  (total, data) => total + parseFloat(data.meal_amount),
                  0
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  selectedOption,
  handleOptionClick,
  setIsSubNavVisible,
  to,
  children,
}) => (
  <div
    className={`nav-item ${
      selectedOption === to.replace("/", "") ? "active" : ""
    }`}
    onClick={() => {
      handleOptionClick(to.replace("/", ""));
      setIsSubNavVisible(true);
    }}
    style={{ borderBottom: "1px solid #ddd", marginBottom: "5px" }}
  >
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </div>
);

const SubNav = ({ isVisible, children }) => (
  <div
    className="pl-3"
    style={{
      display: isVisible ? "block" : "none",
      borderLeft: "1px solid #ddd",
      paddingLeft: "10px",
      marginBottom: "10px",
    }}
  >
    {children}
  </div>
);

const SubNavItem = ({ to, children }) => (
  <Link
    to={to}
    className="btn btn-light"
    style={{ display: "block", marginBottom: "5px" }}
  >
    {children}
  </Link>
);

const styles = {
  container: {
    display: "flex",
  },
  verticalNavbar: {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    backgroundColor: "#333",
    height: "100vh",
    justifyContent: "space-between",
    padding: "10px",
    color: "white",
  },
  logo: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
  },
  navItem: {
    cursor: "pointer",
    marginBottom: "10px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s",
  },
  navItemActive: {
    backgroundColor: "#555",
  },
  subNav: {
    borderLeft: "1px solid #ddd",
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  subNavItem: {
    display: "block",
    marginBottom: "5px",
    transition: "background-color 0.3s",
  },
  subNavItemButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s",
  },
  subNavItemButtonActive: {
    backgroundColor: "#ddd",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: "10px",
    cursor: "pointer",
    textAlign: "center",
    borderTop: "1px solid #555",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  horizontalNavbar: {
    backgroundColor: "#ddd",
    padding: "20px",
    textAlign: "right",
  },
  adminName: {
    color: "black",
  },
  dataDisplay: {
    flex: 1,
    padding: "20px",
  },
};

export default ShowPayement;
