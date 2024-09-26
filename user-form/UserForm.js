// src/UserForm.js

import React, { useState } from "react";
import "./UserForm.css"; // Import the CSS file for styling

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^[0-9]+$/.test(phone);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Name validation
    if (!name) {
      formErrors.name = "Name is required.";
    }

    // Email validation
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      formErrors.email = "Invalid email format.";
    }

    // Phone validation
    if (!phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!validatePhone(phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      formErrors.password = "Password must be at least 8 characters long, with at least one letter and one number.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccess("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "error" : ""}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "error" : ""}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error" : ""}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default UserForm;
