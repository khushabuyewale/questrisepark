import React, { useState } from 'react';

const Meal = ({ ticketPrice }) => {
  const [vegetarianCount, setVegetarianCount] = useState(0);
  const [nonVegetarianCount, setNonVegetarianCount] = useState(0);

  const [showReceipt, setShowReceipt] = useState(false);

  const calculateMealPrice = (count, pricePerPlate) => count * pricePerPlate;
  const calculateTotalAmount = () => {
    const vegetarianPrice = calculateMealPrice(vegetarianCount, 100);
    const nonVegetarianPrice = calculateMealPrice(nonVegetarianCount, 150);

    return ticketPrice + vegetarianPrice + nonVegetarianPrice;
  };

  const handlePay = () => {
    // Add logic to handle payment, e.g., redirect to a payment gateway
    alert('Payment successful!');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
      height: '100vh',
     backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
        maxWidth: '525px',
        height: '400px',
        margin: '0 auto',
        padding: '20px',
        backdropFilter: 'blur(10px)',
       
      }}>
        <h2>Do you want to add a meal to your package?</h2>

        <div >
          <h3>Vegetarian Meal</h3>
          <input
            type="number"
            value={vegetarianCount}
            onChange={(e) => setVegetarianCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of plates"
          />
          <p><b>Total Price: Rs {calculateMealPrice(vegetarianCount, 100)}</b></p>
        </div>

        <div>
          <h3>Non-Vegetarian Meal</h3>
          <input
            type="number"
            value={nonVegetarianCount}
            onChange={(e) => setNonVegetarianCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of plates"
          />
          <p><b>Total Price: Rs {calculateMealPrice(nonVegetarianCount, 150)}</b></p>
        </div>

        {showReceipt && (
          <div className="payment-receipt" >
            <h2>Payment Receipt</h2>
            <p>Ticket Price: Rs {ticketPrice}</p>
            <p>Vegetarian Meal Price: Rs {calculateMealPrice(vegetarianCount, 100)}</p>
            <p>Non-Vegetarian Meal Price: Rs {calculateMealPrice(nonVegetarianCount, 150)}</p>
            <p><b>Total Amount: Rs {calculateTotalAmount()}</b></p>
          </div>
        )}

        <button
          onClick={() => {
            if (vegetarianCount > 0 || nonVegetarianCount > 0) {
              setShowReceipt(true);
            } else {
              alert('Please select at least one meal to proceed.');
            }
          }}
        >
          Show Receipt
        </button>

        {showReceipt && (
          <button onClick={handlePay}>Pay</button>
        )}
      </div>
    </div>
  );
};

export default Meal;
