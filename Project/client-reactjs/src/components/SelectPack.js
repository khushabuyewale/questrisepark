
// 2nd page

import { useNavigate } from 'react-router-dom';
import React from 'react';

import RegularTicketImage from '../assets/RegularTicketBanner.png';
import GroupTicketImage from '../assets/GroupTicketBaner.png';
import StudentTicketImage from '../assets/StudentTicketBanner.png';

const PricingCard = ({ cardType, price, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const commonStyle = {
    maxWidth: '700px',
    height: '400px',
    width: '100%',
    marginTop: '100px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  // Define background images based on card type
  const cardImages = {
    Regular: RegularTicketImage,
    Group: GroupTicketImage,
    Student: StudentTicketImage,
  };

  return (
    <div style={{ padding: '50px' }}>
      <div
        className={`pricing-card ${cardType}-card`}
        style={{
          ...commonStyle,
          backgroundImage: `url(${cardImages[cardType]})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick(price)}
      >
        <h1>{`${cardType} Ticket`}</h1>
        <b>
          <p>{`Price: ${price}/- per head`}</p>
        </b>
        <br />
      </div>
    </div>
  );
};

const SelectPack = () => {
  const navigate = useNavigate();

  const handleCardClick = (price) => {
    navigate('/regular');
  };
  const handleGrpCardClick = (price) => {
    navigate('/group');
  };
  const handleStudCardClick = (price) => {
    navigate('/student');
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '75px' }}>
      <PricingCard cardType="Regular" price={900} onClick={handleCardClick} />
      <PricingCard cardType="Group" price={800} onClick={handleGrpCardClick} />
      <PricingCard cardType="Student" price={500} onClick={handleStudCardClick} />
    </div>
  );
};

export default SelectPack;
