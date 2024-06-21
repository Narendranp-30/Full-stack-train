// Components/StaffForm/StaffForm.js
import React, { useState } from 'react';
import './StaffForm.css';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="staff-form-container">
      <h2>Staff Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StaffForm;
