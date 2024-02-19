import React, { useState } from 'react';

const EnterGrpData = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [records, setRecords] = useState([]);
    const [recordCount, setRecordCount] = useState(1);

    const addRecord = () => {
        // Validation for the first entry
        if (recordCount === 1 && (!phone || !email)) {
            alert('Phone number and email are required for the first entry!');
            return;
        }

        // Validation for subsequent entries
        if (recordCount > 1 && (!name || !age)) {
            alert('Name and age are required for subsequent entries!');
            return;
        }

        // Validation for phone number and email
        if (recordCount === 1 && (!phone || !email)) {
            alert('Phone number and email are required for the first entry!');
            return;
        }

        // Validation for subsequent entries
        if (recordCount > 1 && (!name || !age)) {
            alert('Name and age are required for subsequent entries!');
            return;
        }

        // Validate phone number
        const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
        if (recordCount === 1 && !phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number!');
            return;
        }

        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (recordCount === 1 && !emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        // Validate age (between 5 and 90)
        const parsedAge = parseInt(age, 10);
        if (isNaN(parsedAge) || parsedAge < 5 || parsedAge > 90) {
            alert('Please enter a valid age between 5 and 90!');
            return;
        }

        // Add record to the state
        setRecords([...records, { id: recordCount, name, age }]);

        // Increment record count
        setRecordCount(recordCount + 1);

        // Clear input fields
        setPhone('');
        setEmail('');
        setName('');
        setAge('');
    };

    const removeRecord = (id) => {
        // Remove record from the state
        const updatedRecords = records.filter(record => record.id !== id);

        // Update serial numbers based on the remaining records
        const updatedRecordsWithSerial = updatedRecords.map((record, index) => ({ ...record, id: index + 1 }));

        // Update the state
        setRecords(updatedRecordsWithSerial);
    };

    const handleSubmit = () => {
        // Validation for a minimum of 5 members
        if (records.length < 5) {
            alert('Minimum 5 members required!');
            return;
        }

        // Logic for submitting the data, you can replace this with your actual submission logic
        console.log('Submitting data:', records);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div
                style={{
                    maxWidth: '525px',
                    height: '500px',
                    margin: '0 auto', // Center the form horizontally
                    marginRight: '120px', // Add margin to shift it to the right
                    padding: '20px',
                    marginTop: '100px',
                    border: '2px solid #000',
                    borderRadius: '8px',
                }}
            >
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" /><br />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" /><br />

                <hr />

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" /><br />

                <label htmlFor="age">Age:</label>
                <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" /><br />

                <button style={{ margin: '10px 0', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px' }} onClick={addRecord}>
                    Add
                </button>
            </div>

            <div style={{ width: '45%', textAlign: 'center' }}>
                <div
                    style={{
                        maxWidth: '525px',
                        height: '500px',
                        margin: '0 auto',
                        padding: '20px',
                        marginTop: '100px',
                        border: '2px solid #000',
                        borderRadius: '8px'
                    }}>
                    <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontFamily: 'Arial, sans-serif', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <thead style={{ backgroundColor: 'grey', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Sr. No</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Age</th>
                                    <th style={{ padding: '12px' }}>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map(record => (
                                    <tr key={record.id} style={{ borderBottom: '1px solid #ecf0f1' }}>
                                        <td style={{ padding: '10px' }}>{record.id}</td>
                                        <td style={{ padding: '10px' }}>{record.name}</td>
                                        <td style={{ padding: '10px' }}>{record.age}</td>
                                        <td style={{ padding: '10px' }}>
                                            <button style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }} onClick={() => removeRecord(record.id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a href="/meal"> <button style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px' }} onClick={handleSubmit}>
                        Submit ({records.length} Members)
                    </button></a>
                </div>
            </div>
        </div>
    );
};

export default EnterGrpData;
