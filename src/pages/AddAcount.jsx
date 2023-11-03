import React, { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import './addAcount.scss'

export default function AddAcount() {
  const [formData, setFormData] = useState({
    provider: '',
    email: '',
    password: '',
    category: 'Work'
  });

  const [errors, setErrors] = useState({
    provider: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateForm = () => {
    let valid = true;
    const validateError = { ...errors };

    if (!formData.email) {
      validateError.email = 'Email is required';
      valid = false;
    } else {
      validateError.email = '';
    }

    if (!formData.password) {
      validateError.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      validateError.password = 'Password must be at least 6 characters';
      valid = false;
    } else {
      validateError.password = '';
    }

    if (!formData.provider) {
      validateError.provider = 'Provider is required';
      valid = false;
    } else {
      validateError.provider = '';
    }

    setErrors(validateError);
    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Data Formulir:', formData);
      axios.post(`http://localhost:3030/password`, formData)
        .then((response) => {
          alert('oke');
        })
        .catch((error) => {
          alert('gagal');
          console.error(error);
        });
    }
  }

  return (
    <div style={{
      display: 'flex',
      backgroundColor: 'grey',
    }}>
      <Navbar />
      <div className="form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="email-con">
              {/* <label htmlFor="email">Email : </label> */}
              <p>Email</p>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="error">{errors.email}</span>
            </div>

            <div className="pass-con">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="error">{errors.password}</span>
            </div>

            <div>
              <label htmlFor="provider">Provider:</label>
              <br />
              <input
                type="text"
                id="provider"
                name="provider"
                value={formData.provider}
                onChange={handleChange}
                required
              />
              <span className="error">{errors.provider}</span>
            </div>

            <div>
              <label htmlFor="category">Category:</label>
              <br />
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
