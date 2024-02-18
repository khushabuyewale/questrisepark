import React, { useState } from 'react';

const EnterData = () => {
    const [formData, setFormData] = useState({
        names: [''], // Array to store names
        ages: [''],  // Array to store ages
        phone: '',
        email: '',

    });

    const handleNameChange = (e, index) => {
        const newNames = [...formData.names];
        newNames[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            names: newNames,
        }));
    };

    const handleAgeChange = (e, index) => {
        const newAges = [...formData.ages];
        newAges[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            ages: newAges,
        }));
    };

    const addNameAndAge = () => {
        setFormData((prevData) => ({
            ...prevData,
            names: [...prevData.names, ''],
            ages: [...prevData.ages, ''],
        }));
    };

    const removeNameAndAge = (index) => {
        const newNames = [...formData.names];
        const newAges = [...formData.ages];

        newNames.splice(index, 1);
        newAges.splice(index, 1);

        setFormData((prevData) => ({
            ...prevData,
            names: newNames,
            ages: newAges,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
    };
    return (
        <div>
            <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                <div style={{
                    maxWidth: '525px',
                    height: '500px',
                    margin: '0 auto', // Center the form horizontally
                    marginRight: '120px', // Add margin to shift it to the right
                    padding: '20px',
                    marginTop: '100px',
                    border: '2px solid #000',
                    borderRadius: '8px',
                }}>
                    <h2>Enter Details</h2>
                    <div onSubmit={handleSubmit}>
                        <label>
                            Phone:
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </label>
                        <br />

                        <label>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <br />
                        <hr />
                        {formData.names.map((name, index) => (
                            <div key={index}>

                                <label>
                                    Name {index + 1}:
                                    <input type="text" value={name} onChange={(e) => handleNameChange(e, index)} required />
                                    <button type="button" onClick={() => removeNameAndAge(index)}>
                                        Remove
                                    </button>
                                </label>
                                <br />
                                <label>
                                    Age {index + 1}:
                                    <input type="number" value={formData.ages[index]} onChange={(e) => handleAgeChange(e, index)} required />
                                </label>
                                <br />
                            </div>
                        ))}
                        <button type="button" onClick={addNameAndAge}>
                            Add Name and Age
                        </button>
                        <hr />


                        <a href="/meal">
                            <button type="submit">Submit</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EnterData;
