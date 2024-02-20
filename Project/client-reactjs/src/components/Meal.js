// 4th page

import React, { useState } from 'react';
import chef from '../assets/MenuBg.jpg';
import Breakfast from '../assets/Breakfast.jpg';
import Lunch from '../assets/Lunch.jpg';
import Dinner from '../assets/Dinner.jpg';
import Snacks from '../assets/Snacks.jpg';


const Meal = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);
  const [fourthCount, setFourthCount] = useState(0);

  const calculatePrice = (count, pricePerPerson) => count * pricePerPerson;

  const handleProceed = (packageType) => {
    // You can implement actions or navigation logic here based on the packageType
    console.log(`Proceeding with ${packageType} ticket`);
  };
 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
    <div
        style={{
           
            margin: '0 auto', 
            marginTop: '100px',
            marginBottom: '180px'
        }}
    >
      <h1 style={{marginLeft:'150px'}}>Want To Add Meal To Your Package ?</h1>
      <div className="select-pack-container">
       {/* Breakfast  149, */}
        <div className="pricing-card first-card">
          <h2>Breakfast</h2>
          <p>₹149/-</p>
          <br />
          <input
            type="number"
            value={firstCount}
            onChange={(e) => setFirstCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of people"
          />
          <br />
          <p><b>Total Price: Rs {calculatePrice(firstCount, 149)}</b></p>

        </div>
        {/*  Lunch 399, */}
        <div className="pricing-card second-card">
          <h2> Lunch </h2>
          <p>₹399/-</p>
          <br />
          <input
            type="number"
            value={secondCount}
            onChange={(e) => setSecondCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of people (min 5)"
          />
          <br />
          <p><b>Total Price: Rs {calculatePrice(secondCount, 399)}</b></p>


        </div>
        {/* Snacks 99 */}
        <div className="pricing-card third-card">
          <h2>Snacks</h2>
          <p>₹99/-</p>
          <br />
          <input
            type="number"
            value={thirdCount}
            onChange={(e) => setThirdCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of students"
          />
          <br />
          <p><b>Total Price: Rs {calculatePrice(thirdCount, 99)}</b></p>

        </div>

        {/*   Dinner  499 */}

        <div className="pricing-card fourth-card">
          <h2>Dinner</h2>
          <p>₹499/-</p>
          <br />
          <input
            type="number"
            value={fourthCount}
            onChange={(e) => setFourthCount(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of students"
          />
          <br />
          <p><b>Total Price: Rs {calculatePrice(fourthCount, 499)}</b></p>
          <a href='/pay'>
            <button onClick={() => handleProceed('Fourth')}
              style={{
                color: 'white',
                width: '50%',
                padding: '5px',
                marginTop: '200px',
                border: '2px solid',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor:'#00B000',
              }}
            >Proceed</button></a>
        </div>
        <div class="menu-card" 
      
        >
          <h5>Breakfast (8:30 AM to 11:00 AM)</h5>
          <ul>
            <li>
              <h6>Idli Vada Set</h6> + Tea/Coffee
            </li>
            <li>
              <h6>Poha</h6> + Tea/Coffee
            </li>
            <li>
              <h6>Masala Dosa</h6> + Tea/Coffee
              <p style={{ color: 'red' }}>(Any One Option)</p>
            </li>
          </ul>


          <h5>Lunch (1:00 PM to 3:00 PM)</h5>
          <ul>
            <li>
              <h6>Chicken Biryani Combo</h6>
            </li>
            <li>
              <h6>Veg Biryani Combo</h6>
            </li>
            <li>
              <h6>Veg Fried Rice Combo</h6>
            </li>
            <li>
              <h6>Chicken Fried Rice Combo</h6>
              <p style={{ color: 'red' }}>(Any One Option)</p>
            </li>
          </ul>


          <h5>Snacks (4:30 PM to 6:00 PM)</h5>
          <ul>
            <li>
              <h6>Samosa/Kachori 1 pc</h6> + Tea/Coffee
            </li>

          </ul>


          <h5>Dinner (6:00 PM to 7:00 PM)</h5>
          <ul>
            <li>
              <h6>Chapathi with Chicken Curry</h6>
            </li>
            <li>
              <h6>Veg Curry</h6>
            </li>
            <li>
              <h6>Egg Curry</h6>
              <p style={{ color: 'red' }}>(Any One Option)</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

// CSS styles (unchanged)

const styles = `
  .select-pack-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    
  }

  .pricing-card {
    color: white;
    text-shadow: 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
    width: 250px;
    height: 300px;
    margin-top:80px;
    padding: 20px;
    margin: 5px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    background-size: cover;
    
  }

  .first-card {
    background-image: url('${Breakfast}'); /* Replace with the actual image URL */
  }

  .second-card {
    background-image: url('${Lunch}'); /* Replace with the actual image URL */
  }

  .third-card {
    background-image: url('${Snacks}'); /* Replace with the actual image URL */
  }

  .fourth-card {
    background-image: url('${Dinner}'); /* Replace with the actual image URL */
  }

  .pricing-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  .menu-card {
    color: white;
    width: 400px;
    margin: 50px auto;
    background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background for better visibility */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 180px;
    margin-bottom: 180px;
    overflow-y: scroll;
    height: 500px;
    background-image: url('${chef}');
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(5px); /* Adjust the blur intensity as needed */
  }

  .h2, h3 {
    color: #333;
  }

  .ul {
    list-style: none;
    padding: 0;
  }

  .li {
    margin-bottom: 10px;
  }
`;

//Menu Card 



// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Meal;
