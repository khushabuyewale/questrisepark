
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-credit-cards/lib/styles-compiled.css';

const Pay = () => {
  const navigate = useNavigate();

  // State for form input
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [amountTicket, setAmountTicket] = useState(0);
  const [amountMeal, setAmountMeal] = useState(0);

  // Function to handle payment
  const handlePayment = () => {
    const totalAmount = amountTicket + amountMeal;
    // Add logic to handle payment (e.g., API call, payment gateway integration)
    // Display payment success/failure message
    alert(`Payment successful! Total Amount: $${totalAmount}`);
    // Redirect to a success page or any other page as needed
    navigate('/payment-success');
  };

  return (
    <div>
      <h2>Payment Details</h2>

      {/* Payment form */}
      <form>
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

        {/* Credit card preview */}
        <Cards name={name} number={cardNumber} expiry={expiry} cvc={cvc} />

        {/* Ticket and Meal amount input */}
        <label>
          Amount of Ticket:
          <input type="number" value={amountTicket} onChange={(e) => setAmountTicket(parseFloat(e.target.value))} />
        </label>
        <br />
        <label>
          Amount of Meal:
          <input type="number" value={amountMeal} onChange={(e) => setAmountMeal(parseFloat(e.target.value))} />
        </label>
        <br />

        {/* Display total amount */}
        <p>Total Amount: ${amountTicket + amountMeal}</p>

        {/* Pay button */}
        <button type="button" onClick={handlePayment}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default Pay;
