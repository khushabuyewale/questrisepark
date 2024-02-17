import React, { useState } from 'react';

const SelectPack = () => {
  const [regularCount, setRegularCount] = useState(0);
  const [groupCount, setGroupCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  const calculatePrice = (count, pricePerPerson) => count * pricePerPerson;

  const handleProceed = (packageType) => {
    // You can implement actions or navigation logic here based on the packageType
    console.log(`Proceeding with ${packageType} ticket`);
  };

  return (
    <div className="select-pack-container">
      <div className="pricing-card regular-card">
        <h2>Regular Ticket</h2>
        <br/>
        <input
          type="number"
          value={regularCount}
          onChange={(e) => setRegularCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of people"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(regularCount, 900)}</b></p>
        <a href='/meal'>
        <button onClick={() => handleProceed('Regular')}
        
        style={{
          width: '50%',
          padding: '5px',
          marginTop: '100px',
          border: 'solid',
          borderRadius: '3px',
          cursor: 'pointer',
          
        }}>Proceed</button></a>
      </div>

      <div className="pricing-card group-card">
        <h2>Group Ticket</h2>
        <br/>
        <input
          type="number"
          value={groupCount}
          onChange={(e) => setGroupCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of people (min 5)"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(groupCount, 800)}</b></p>
        <a href='/meal'>
        <button
          onClick={() => {
            if (groupCount >= 5) {
              handleProceed('Group');
            } else {
              alert('Minimum 5 people required for Group Ticket');
            }
          }}
        
          style={{
            width: '50%',
            padding: '5px',
            marginTop: '100px',
            border: 'solid',
            borderRadius: '3px',
            cursor: 'pointer',
            
          }}
        >
          Proceed
        </button></a>
      </div>

      <div className="pricing-card student-card">
        <h2>Student Ticket</h2>
        <br/>
        <input
          type="number"
          value={studentCount}
          onChange={(e) => setStudentCount(Math.max(0, parseInt(e.target.value)))}
          placeholder="Enter count of students"
        />
        <br/>
        <p><b>Total Price: Rs {calculatePrice(studentCount, 500)}</b></p>
        <a href='/terms'>
        <button onClick={() => handleProceed('Student')}
        style={{
          width: '50%',
          padding: '5px',
          marginTop: '100px',
          border: 'solid',
          borderRadius: '3px',
          cursor: 'pointer',
          
        }}
        >Proceed</button></a>
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
    height: 100vh;
  }

  .pricing-card {
    width: 300px;
    height: 50vh;
    padding: 20px;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .regular-card {
    background-image: url('regular-background.jpg'); /* Replace with the actual image URL */
  }

  .group-card {
    background-image: url('group-background.jpg'); /* Replace with the actual image URL */
  }

  .student-card {
    background-image: url('student-background.jpg'); /* Replace with the actual image URL */
  }

  .pricing-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
 
`;

// Create a style element and append it to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default SelectPack;
