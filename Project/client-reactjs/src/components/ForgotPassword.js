import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically send a request to your backend
    // to initiate the password reset process, passing the user's email.

    // Example: You might use a library like axios for making HTTP requests.
    // axios.post('/api/forgot-password', { email })
    //   .then(response => {
    //     // Handle success (e.g., show a success message)
    //   })
    //   .catch(error => {
    //     // Handle error (e.g., show an error message)
    //   });

    // For this example, let's just log the email for demonstration purposes.
    console.log('Initiate password reset for email:', email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
