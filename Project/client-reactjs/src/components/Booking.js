import React, { useState } from 'react';

const Booking = () => {


  return (
    <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
 <div
        style={{
          maxWidth: '525px',
          height: '400px',
          margin: '0 auto', // Center the form horizontally
          marginRight: '120px', // Add margin to shift it to the right
          padding: '20px',
          marginTop:'100px',
          border: '2px solid #000',
          borderRadius: '8px',
        }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="bookingDate" style={{ marginBottom: '2px' }}><b>Booking Date</b></label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}

              
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="mobileNo" style={{ marginBottom: '5px' }}><b>Mobile Number</b></label>
              <input
                type="tel"
                id="mobileNo"
                placeholder='Enter your Mobile No.'
                name="mobileNo"
                style={{
                  width: '100%',
                  padding: '8px',
                  boxSizing: 'border-box',
                 // border: errors.mobileNo ? '1px solid red' : '1px solid #ccc',
                  borderRadius: '4px',
                }}
          
                
              />
              {/* {errors.mobileNo && <div style={{ color: 'red' }}>{errors.mobileNo}</div>} */}
            </div>
            <br />
            <a href='/selectPack'>
            <button
              type="submit"
              style={{
                width: '50%',
                padding: '10px',
                background: '',/*add background color*/
                marginLeft: '25%',
                border: 'solid',
                borderRadius: '8px',
                cursor: 'pointer',
               
              }}
            >
              PROCEED
            </button>
            </a>
            <br />
           
           <a href='/selectPack'> <button
              type="submit"
              style={{
                width: '50%',
                padding: '10px',
                background: '',/*add background color*/
                marginLeft: '25%',
                border: 'solid',
                borderRadius: '8px',
                cursor: 'pointer',
                
              }}
              
            >
            
              Back to Home
            </button>
              </a>
          </section>
        </div>
    </div>
  );
};

export default Booking;
