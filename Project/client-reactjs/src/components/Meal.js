// 4th page
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import chef from '../assets/MenuBg.jpg';
import Breakfast from '../assets/Breakfast.jpg';
import Lunch from '../assets/Lunch.jpg';
import Dinner from '../assets/Dinner.jpg';
import Snacks from '../assets/Snacks.jpg';


const Meal = () => {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [snacks, setSnacks] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculatePrice = (count, pricePerPerson) => count * pricePerPerson;


  useEffect(() => {
    const total = calculatePrice(breakfast, 149) +
                  calculatePrice(lunch, 299) +
                  calculatePrice(snacks, 129) +
                  calculatePrice(dinner, 349);

    setTotalAmount(total);
  }, [breakfast, lunch, snacks, dinner]);




  const handleProceed = (packageType) => {
    // You can implement actions or navigation logic here based on the packageType
    console.log(`Proceeding with ${packageType} ticket`);

    const data = {
     breakfast: breakfast,
      lunch: lunch,
      snacks: snacks,
      dinner: dinner
}
const url = 'http://localhost:5293/api/meal/bookmeal';
axios.post(url, data).then((result) => {
alert(result.data);
}).catch((error) => {
alert(error.message);
})

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
            value={breakfast}
            onChange={(e) => setBreakfast(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of people"
          />
          <br />
          <p><b>Total Price: ₹{calculatePrice(breakfast, 149)}</b></p>

        </div>
        {/*  Lunch 299, */}
        <div className="pricing-card second-card">
          <h2> Lunch </h2>
          <p>₹299/-</p>
          <br />
          <input
            type="number"
            value={lunch}
            onChange={(e) => setLunch(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of people"
          />
          <br />
          <p><b>Total Price: ₹{calculatePrice(lunch, 299)}</b></p>


        </div>
        {/* Snacks 129 */}
        <div className="pricing-card third-card">
          <h2>Snacks</h2>
          <p>₹129/-</p>
          <br />
          <input
            type="number"
            value={snacks}
            onChange={(e) => setSnacks(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of students"
          />
          <br />
          <p><b>Total Price: ₹{calculatePrice(snacks, 129)}</b></p>

        </div>

        {/*   Dinner  349 */}

        <div className="pricing-card fourth-card">
          <h2>Dinner</h2>
          <p>₹349/-</p>
          <br />
          <input
            type="number"
            value={dinner}
            onChange={(e) => setDinner(Math.max(0, parseInt(e.target.value)))}
            placeholder="Enter count of students"
          />
          <br />
          <p><b>Total Price:  ₹{calculatePrice(dinner, 349)}</b></p>

          <a href='/pay'>
         
            <button onClick={() => handleProceed('Fourth')}
              style={{
                color: 'white',
                width: '50%',
                padding: '5px',
                marginTop: '150px',
                border: '2px solid',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor:'#00B000',
              }}
            >   Proceed</button></a>
               
          <div><p>
              <b>Total Amount: ₹{totalAmount}</b>
            </p></div>
        </div>
        
        
        <div class="menu-card" 
      
        >
          <h5>Breakfast (8:30 AM to 11:00 AM)</h5>
          <ul>
            <li>
              <h6>Idli Vada Set</h6>
            </li>
            <li>
              <h6>Poha/Upma</h6>
            </li>
            <li>
              <h6>Masala Dosa</h6>
               <b>+ Tea/Coffee</b>
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
              <h6>Samosa/Kachori </h6> 
            </li>
            <li>
              <h6>Dhokla/Fafda-Jalebi</h6> 
            </li>
            <li>
              <h6>VadaPav/Fritter</h6> 
              <b>+ Tea/Coffee</b>
              <p style={{ color: 'red' }}>(Any One Option)</p>
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
