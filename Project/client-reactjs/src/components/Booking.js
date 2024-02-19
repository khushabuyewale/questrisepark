import React, { useState } from 'react';
import ThemeParkCardImg from '../assets/Capture.jpg';
import WaterParkCardImg from '../assets/Capture2.jpg';

const Card = ({ title, content, onClick, backgroundColor, imageUrl, ticketCount }) => {
  const isSoldOut = ticketCount === 0;

  const cardStyle = {
    maxWidth: '700px',
    width: '600px',
    height: '400px',
    margin: '0 auto', // Center the form horizontally
    padding: '20px',
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: backgroundColor || '#f0f0f0', // Default to a fallback color if not provided
    position: 'relative',
    filter: isSoldOut ? 'blur(5px)' : 'none', // Apply blur if sold out
  };

  const titleStyle = {
    marginBottom: '8px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom:'15px'
  };

  const ticketCountStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#fff',
    padding: '8px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <span style={ticketCountStyle}>Tickets available: {ticketCount}</span>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '60px',
};

// Get the current date in the format YYYY-MM-DD
const currentDate = new Date().toISOString().split('T')[0];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCardClick = (ticketCount) => {
    if (selectedDate === '') {
      alert('Please select a date before booking.');
    } else if (ticketCount > 0) {
      window.location.href = '/selectPack';
    }
  };

  return (
    <div>
      <div>
        <div style={{ marginLeft: '120px' }}>
          <div>
            <b>
              Date{' '}
              <input
                type="date"
                style={{ marginBottom: '20px', marginTop: '120px' }}
                min={currentDate}
                onChange={handleDateChange}
              />
            </b>
          </div>
        </div>
        <div style={containerStyle}>
          <Card
            title="Theme Park"
            onClick={() => handleCardClick(1)}
            backgroundColor="#ff7518"
            imageUrl={ThemeParkCardImg}
            ticketCount={1}
            style={{ marginRight: '-60px' }}
          />
           <Card
            title="Water Park"
            onClick={() => handleCardClick(2)}
            backgroundColor="#3cb4c4"
            imageUrl={WaterParkCardImg}
            ticketCount={2}
            style={{ marginLeft: '-60px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
