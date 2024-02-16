import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: loginEmail,
        password: loginPassword,
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/recover-password', {
        email: forgotPasswordEmail,
      });

      const responseString = response.data;

      // Use regex to extract email and password
      const emailMatch = responseString.match(/Email: (.+?),/);
      const passwordMatch = responseString.match(/Password: (.+)$/);

      // Check if matches are found
      const newForgetEmail = emailMatch ? emailMatch[1] : null;
      const newForgetPassword = passwordMatch ? passwordMatch[1] : null;

      // Now you have email and password as separate variables
      console.log('Email:', newForgetEmail);
      console.log('Password:', newForgetPassword);

      setPass(newForgetPassword);

    } catch (error) {
      console.error('Forgot password request failed:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div style={{ background: 'radial-gradient(circle,#f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)', paddingBottom: '20px', paddingTop: '20px' }}>
      {/* Login Form */}
      <div
        style={{
          maxWidth: '350px',
          height: '500px',
          margin: '20px auto',
          padding: '20px',
          border: '5px solid #000',
          borderRadius: '8px',
          background: 'linear-gradient(#f6dae4 ,#d0d5f7)',
        }}
      >
        <h3>Admin Login</h3> <br/>
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="loginEmail" style={{ marginBottom: '5px' }}>
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder='Enter your Email Address'
              id="loginEmail"
              name="loginEmail"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
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
              placeholder='******'
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          {showForgotPassword ? (
            <div>
              {/* Forgot Password form fields */}
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="forgotPasswordEmail" style={{ marginBottom: '5px' }}>
                  <b>Enter your email to recover password</b>
                </label>
                <input
                  type="email"
                  id="forgotPasswordEmail"
                  name="forgotPasswordEmail"
                  placeholder='Enter your Email Address'
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
              </div>
              <button
                type="button"
                style={{
                  width: '50%',
                  padding: '10px',
                  background: 'linear-gradient(#957dad ,#d291bc)',
                  marginTop: '20px',
                  marginLeft: '70px',
                  border: 'solid',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                onClick={handleForgotPassword}
              >
                Recover Password
              </button>
            </div>
          ) : (
            <div>
                <a href='/showDetails'>
              <button
                type="button"
                style={{
                  width: '50%',
                  padding: '10px',
                  background: 'linear-gradient(#957dad ,#d291bc)',
                  marginTop: '20px',
                  marginLeft: '70px',
                  border: 'solid',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                onClick={handleLogin}
              >
                Sign in
              </button>
              </a>
              <br/>
              <br />
              <a href="#!" onClick={() => setShowForgotPassword(!showForgotPassword)}>
               <b> Forgotten Your Password ?</b> 
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
