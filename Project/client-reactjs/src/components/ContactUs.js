import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nphd33h', 'template_25rlobe', form.current, {
        publicKey: 'keOigkIy-W2XhWLNM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
      <div
        style={{
          maxWidth: '525px',
          height: '500px',
          margin: '0 auto', // Center the form horizontally
          marginRight: '120px', // Add margin to shift it to the right
          padding: '20px',
          marginTop:'100px',
          border: '2px solid #000',
          borderRadius: '8px',
        }}
        >
      <h2>Contact Us</h2><br/>
      <form ref={form} onSubmit={sendEmail}> 
        <div className="mb-3">
         <b>Name </b> <input type="text" name="user_name" className="form-control" id="name" placeholder='Enter your Name'/>
        </div>
        <div className="mb-3">
        <b>Email </b> <input type="email" name="user_email" className="form-control" id="email" placeholder='Enter your Email Address'/>
        </div>
        <div className="mb-3">
        <b>Message </b> <textarea name="message" className="form-control" id="message" rows="4" placeholder='Enter Message '></textarea>
        </div>
        <button
            type="button"
            style={{
              width: '50%',
              padding: '10px',
              background: '',
              marginTop: '20px',
              marginLeft: '25%',
              border: '2px solid',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
         
          >
          Send Feedback
        </button>
        </form>
        </div>
    </div>
   
  );
};

export default ContactUs;
