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
    <div style={{ background: 'radial-gradient(circle,#f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)', paddingBottom: '20px', paddingTop: '20px' }}>
         <div
        style={{
          maxWidth: '550px',
          height: '500px',
          margin: '20px auto',
          padding: '20px',
          border: '5px solid #000',
          borderRadius: '8px',
          background: 'linear-gradient(#f6dae4 ,#d0d5f7)',
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
              background: 'linear-gradient(#957dad ,#d291bc)',
              marginTop: '20px',
              marginLeft: '90px',
              border: 'solid',
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
