
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  const navigate = useNavigate();

  // State and handlers for form input
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [amountTicket, setAmountTicket] = useState(0);
  const [amountMeal, setAmountMeal] = useState(0);

  // Function to handle payment
  const handlePayment = (e) => {
    e.preventDefault();


    const totalAmount = amountTicket + amountMeal;

    alert(`Payment successful! Total Amount: $${totalAmount}`);

    navigate('/payment-success');
  };

  return (
    <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
    <div style={{
          maxWidth: '525px',
          height: '500px',
          margin: '0 auto', // Center the form horizontally
          marginRight: '120px', // Add margin to shift it to the right
          padding: '20px',
          marginTop:'100px',
          border: '2px solid #000',
          borderRadius: '8px',
        }}>
    <h2>Payment Details</h2>
  
    {/* Payment form */}
    <form onSubmit={handlePayment}>
     
  
      {/* Credit card preview */}
      {/* <Cards name={name} number={cardNumber} expiry={expiry} cvc={cvc} /> */}
  
      {/* Ticket and Meal amount input */}
      <label>
      <p> Amount of Ticket: ${amountTicket} </p>
      </label>
      <br />
      <label>
       <p> Amount of Meal: ${amountMeal}  </p> 
      </label>
      <br />
  
      {/* Display total amount */}
      <p>Total Amount: ${amountTicket + amountMeal}</p>
  
      <label>
        Name on Card:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Expiry Date:
        <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
      </label>
      <br />
      <label>
        CVC:
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </label>
      <br />


      <button
        type="submit"
        style={{
          width: '50%',
          padding: '5px',
          marginTop: '20px',
          border: 'solid',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Pay
      </button>
    </form>
  </div>
  </div>
  );
};

export default Pay;
