import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminBg from '../assets/AdminBG.png';

const Admin = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: loginEmail,
      password: loginPassword
    };
    const url = 'http://localhost:5293/api/admin/login';
    
   axios.post(url, data)
      .then((result) => {
        navigate('/showBooking');
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('Failed to log in. Please check your credentials and try again.');
      });  
    axios.post(url, data)
      .then((response) => {
        if (response.data.success) {
          navigate('/showBooking');
        } else {
          console.error('Login failed. Server response:', response.data);
          alert('Failed to log in. Please check your credentials and try again.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);

        if (error.response) {
          console.error('Server responded with:', error.response.data);
        }

        alert('Failed to log in. Please check your credentials and try again.');
      });
  };

  // Function to handle button click and trigger navigation
  const handleButtonClick = () => {
    navigate('/showBooking');
  };

  return (
    <div style={{ paddingBottom: '20px', paddingTop: '20px',backgroundImage:`url(${AdminBg})`,backgroundSize:'cover' }}>
      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div
          style={{
            color:'white',
            maxWidth: '480px',
            height: '500px',
            margin: '0 auto', // Center the form horizontally
            marginRight: '80px', // Add margin to shift it to the right
            padding: '20px',
            marginTop: '100px',
            borderRadius: '8px',
          }}
        >
          <h2>Admin Login</h2> <br />
          <div>
            <div style={{ marginBottom: '5px' }}>
              <label htmlFor="loginEmail" style={{ marginBottom: '5px' }}>
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                id="loginEmail"
                name="loginEmail"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box',borderRadius:'8px' }}
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="loginPassword" style={{ marginBottom: '5px' }}>
                <b>Password</b>
              </label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Enter password"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box',borderRadius:'8px' }}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <div>
              <button

                

                onClick={handleButtonClick}
                type="submit"

                style={{
                  color:'#003366',
                  width: '50%',
                  padding: '10px',
                  marginTop: '20px',
                  border: 'solid',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginLeft: '25%'
                }}
              >
               <b> Sign in</b>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
