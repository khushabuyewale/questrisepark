import React, { useState } from 'react';

const EnterStudData = () => {
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        names: [],
        ages: [],
        studentIds: [],
        collegeNames: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
    const handleIdChange = (e, index) => {
        const newStudentIds = [...formData.studentIds];
        newStudentIds[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            studentIds: newStudentIds,
        }));
    };

    const handleCllgChange = (e, index) => {
        const newCollegeNames = [...formData.collegeNames];
        newCollegeNames[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            collegeNames: newCollegeNames,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
    };

    const add = () => {
        setFormData((prevData) => ({
            ...prevData,
            names: [...prevData.names, ''],
            ages: [...prevData.ages, ''],
            studentIds: [...prevData.studentIds, ''],
            collegeNames: [...prevData.collegeNames, ''],
        }));
    };

    const remove = (index) => {
        const newNames = [...formData.names];
        const newAges = [...formData.ages];
        const newStudentIds = [...formData.studentIds];
        const newCollegeNames = [...formData.collegeNames];

        newNames.splice(index, 1);
        newAges.splice(index, 1);
        newStudentIds.splice(index, 1);
        newCollegeNames.splice(index, 1);

        setFormData((prevData) => ({
            ...prevData,
            names: newNames,
            ages: newAges,
            studentIds: newStudentIds,
            collegeNames: newCollegeNames,
        }));
    };

    return (
        <div style={{ paddingBottom: '20px', paddingTop: '20px' }}>
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
                                <button type="button" onClick={() => remove(index)}>
                                    Remove
                                </button>
                            </label>
                            <br />
                            <label>
                                Age {index + 1}:
                                <input type="number" value={formData.ages[index]} onChange={(e) => handleAgeChange(e, index)} required />
                            </label>
                            <br />

                            <label>
                                Student ID {index + 1}:
                                <input type="text" value={formData.studentIds[index]} onChange={(e) => handleIdChange(e, index)} required />
                            </label>
                            <br />

                            <label>
                                College Name {index + 1}:
                                <input type="text" value={formData.collegeNames[index]} onChange={(e) => handleCllgChange(e, index)} required />
                            </label>
                            <br />
                        </div>
                    ))}
                    <button type="button" onClick={add}>
                        Add
                    </button>
                    <hr />
                    <a href="/meal">
                        <button type="submit">Submit</button></a>
                </div>
            </div>
        </div>
    );
};

export default EnterStudData;
