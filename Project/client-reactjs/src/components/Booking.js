import React from 'react';

const cardStyle = {
  maxWidth: '700px',
  width: '600px',
          height: '400px',
          margin: '0 auto', // Center the form horizontally
          marginRight: '120px', // Add margin to shift it to the right
          padding: '20px',
          marginTop:'10px',
          marginLeft: '120px',
          border: '2px solid #000',
          borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  marginBottom: '8px',
};

const buttonStyle = {
  margin: '8px 0',
  padding: '8px 16px',
};

const Card = ({ title, content }) => {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p>{content}</p>
    <button style={{buttonStyle,
                  width: '50%',
                  padding: '10px',
                  marginTop: '200px',
                  border: 'solid',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginLeft:'25%'}}>Proceed</button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

  // Get the current date in the format YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0];

  const handleCard1Click = () => {
    // You can perform any logic before navigating
    // For simplicity, this example uses a hardcoded path
    window.location.href = '/Home';
  };

  const handleCard2Click = () => {
    // You can perform any logic before navigating
    // For simplicity, this example uses a hardcoded path
    window.location.href = '/ContactUs';
  };

const Booking = () => {
  return (
    <div>
      <div>
    <div style={{marginLeft:'120px'}}>
    <div><b>
          Date{' '}
          <input
            type="date"
            style={{ marginBottom: '20px', marginTop: '120px' }}
            min={currentDate}
          />
        </b></div>
    </div>
    <div style={containerStyle}>
       
      <Card title="Card 1" content="Content for Card 1" onClick={handleCard1Click} style={{marginRight:'-60px'}}/>
      <Card title="Card 2" content="Content for Card 2" onClick={handleCard2Click} style={{marginLeft:'-60px'}}/>
    </div>
    </div>
    </div>
  );
};

export default Booking;
