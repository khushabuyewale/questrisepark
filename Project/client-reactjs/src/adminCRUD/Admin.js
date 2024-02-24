import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminBg from '../assets/AdminBG.png';

const Admin = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    const data = {
      email: loginEmail,
      password: loginPassword
    };
    const url = 'http://localhost:5293/api/admin/login';
    try {
      const response = await axios.post(url, data);
      if (response.data === "Login successful") {
        navigate('/showBooking');
      }
      else {
        alert(`Wrong credentials!`);
      }
    } catch (error) {
      error.message = "Login failed!";
      alert(error.message);
    }
    
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

                

                onClick={handleLogin}
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
