import React, { useState } from 'react';
import "../styles/App.css"
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    email: '',
    mobile: '',
  });

  const validateForm = () => {
    let valid = true;

    // Validate Name
    if (!formData.name.match(/^[a-zA-Z]+$/)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name should contain only letters' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }

    // Validate Address
    if (formData.address.match(/[^a-zA-Z0-9 ]/)) {
      setErrors((prevErrors) => ({ ...prevErrors, address: 'Address should not contain special characters' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, address: '' }));
    }

    // Validate Email
    if (!formData.email.includes('@') || !formData.email.includes('.com')) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email should contain @ and .com' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Validate Mobile
    if (formData.mobile.length !== 10) {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: 'Mobile number should be 10 characters long' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has validation errors. Please check.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <div className="errorMessage">{errors.name}</div>
        </div>

        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          <div className="errorMessage">{errors.address}</div>
        </div>

        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          <div className="errorMessage">{errors.email}</div>
        </div>

        <div>
          <label>Mobile:</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          <div className="errorMessage">{errors.mobile}</div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;