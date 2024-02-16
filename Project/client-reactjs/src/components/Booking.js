import React, { useState } from 'react';

const Booking = () => {
  

  return (
    <>
      <nav style={{ background: 'radial-gradient(circle,#f6dae4 0%, #d4f0f7 35%, #d0d5f7 75%, #b8cfec 100%)', paddingBottom: '20px', paddingTop: '20px' }}>
        <div
          style={{
            maxWidth: '300px',
            height: '400px',
            margin: '20px auto',
            padding: '20px',
            border: '5px solid #000',
            borderRadius: '8px',
            background: 'linear-gradient(#f6dae4 ,#d0d5f7)',
           
          }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="bookingDate" style={{ marginBottom: '5px' }}><b>Booking Date</b></label>
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
                background: 'linear-gradient(#957dad ,#d291bc)',
                marginLeft: '70px',
                border: 'solid',
                borderRadius: '8px',
                cursor: 'pointer',
               
              }}
            >
              PROCEED
            </button>
            </a>
            <br />
           
           <a href='/home'> <button
              type="submit"
              style={{
                width: '50%',
                padding: '10px',
                background: 'linear-gradient(#957dad ,#d291bc)',
                marginLeft: '70px',
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
      </nav>

      
    </>
  );
};

export default Booking;
