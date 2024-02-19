import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterData = () => {
    const [formData, setFormData] = useState({
        names: ['Name 1'],
        ages: ['Age 1'],
        phone: '',
        email: '',
        ticketCount: 1,
    });

    const navigate = useNavigate();

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
        const { names, ages } = formData;
        setFormData((prevData) => ({
            ...prevData,
            names: [...names, ''],
            ages: [...ages, ''],
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

    const tableHeaderStyle = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #ddd',
    };

    const tableRowStyle = {
        borderBottom: '1px solid #ddd',
    };

    const tableCellStyle = {
        padding: '10px',
        border: '1px solid #ddd',
    };

    const removeButtonStyle = {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '5px 10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
    };

    const labelStyle = {
        display: 'block',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        marginBottom: '5px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '5px',
    };

    const submitBtnStyle = {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
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
        console.log('Form Data Submitted:', formData);
        navigate('/meal');
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* Left side with the table of names and ages */}
            <div style={{ flex: 1, marginLeft: '20px' }}>
                <div style={{ maxWidth: '525px', height: '500px', margin: '0 auto', padding: '20px', marginTop: '100px', border: '2px solid #000', borderRadius: '8px' }}>
                    <h3>Entered Names and Ages:</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Sr.no</th>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Age</th>
                                <th style={tableHeaderStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.names.map((name, index) => (
                                <tr key={index} style={tableRowStyle}>
                                    <td style={tableCellStyle}>{index + 1}</td>
                                    <td style={tableCellStyle}>{name}</td>
                                    <td style={tableCellStyle}>{formData.ages[index]}</td>
                                    <td style={tableCellStyle}>
                                        <button type="button" onClick={() => removeNameAndAge(index)} style={removeButtonStyle}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Right side with the form */}
            <div style={{ flex: 1, marginLeft: '20px' }}>
                <div style={{ maxWidth: '525px', height: '500px', margin: '0 auto', padding: '20px', marginTop: '100px', border: '2px solid #000', borderRadius: '8px' }}>
                    <h2 style={{ marginBottom: '20px' }}>Enter Details</h2>
                    <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                        <label style={labelStyle}>
                            Phone:
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
                        </label>

                        <label style={labelStyle}>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                        </label>
                        <br />
                        <hr />
                        {formData.names.map((name, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <label style={labelStyle}>
                                    Name {index + 1}:
                                    <input type="text" value={name} onChange={(e) => handleNameChange(e, index)} required style={inputStyle} />
                                </label>
                                <label style={labelStyle}>
                                    Age {index + 1}:
                                    <input type="number" value={formData.ages[index]} onChange={(e) => handleAgeChange(e, index)} required style={inputStyle} />
                                </label>
                            </div>
                        ))}
                        <button type="button" onClick={() => addNameAndAge()} style={buttonStyle}>
                            Add Member
                        </button>
                        <hr />
                        <button type="submit" style={submitBtnStyle}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnterData;
