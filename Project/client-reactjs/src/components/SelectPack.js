import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingCard = ({ cardType, price, onClick }) => {
  const commonStyle = {
    width: '50%',
    padding: '5px',
    marginTop: '100px',
    border: 'solid',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div className={`pricing-card ${cardType}-card`} style={{ ...commonStyle }} onClick={() => onClick(price)}>
      <h2>{`${cardType} Ticket`}</h2>
      <p>{`Price: ${price}/- per head`}</p>
      <br />
    </div>
  );
};

const SelectPack = () => {
  const navigate = useNavigate();

  const handleCardClick = (price) => {
    navigate('/enterData');
  };
  const handleStudCardClick = (price) => {
    navigate('/enterStudData');
  };

  return (
    <div className="select-pack-container">
      <PricingCard cardType="regular" price={900} onClick={handleCardClick} />
      <PricingCard cardType="group" price={800} onClick={handleCardClick} />
      <PricingCard cardType="student" price={500} onClick={handleStudCardClick} />
    </div>
  );
};

export default SelectPack;
