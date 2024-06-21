// Components/AboutUs/AboutUs.js
import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleStaffButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <button onClick={handleStaffButtonClick}>Staff</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Position:
            <input type="text" name="position" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AboutUs;
