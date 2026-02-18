import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUniversity } from "react-icons/fa";
import "../style/pinfo.css";

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  // ✅ Field Validation Logic
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value || value.trim().length < 4) {
          error = "Name must be at least 4 characters";
        }
        break;

      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;

      case "phone":
        if (!value) {
          error = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(value)) {
          error = "Phone number must be 10 digits";
        }
        break;

      case "college":
        if (!value) {
          error = "College name is required";
        }
        break;

      case "department":
        if (!value) {
          error = "Please select a department";
        }
        break;

      case "year":
        if (!value) {
          error = "Please select year of study";
        }
        break;

      default:
        break;
    }

    return error;
  };

  // ✅ Handle Input Change (Live Validation)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  // ✅ Final Validation Before Next Step
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="register-container">
      <h2 className="e-event-title">Personal Infos</h2>
      <div className="register-form">

        {/* NAME */}
        <div className="field-group">
          <div className={`input-field ${errors.name ? "error" : ""}`}>
            <FaUser />
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name || ""}     
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* EMAIL */}
        <div className="field-group">
          <div className={`input-field ${errors.email ? "error" : ""}`}>
            <FaEnvelope />
            <input
              name="email"
              placeholder="Email"
              value={formData.email || ""}     
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* PHONE */}
        <div className="field-group">
          <div className={`input-field ${errors.phone ? "error" : ""}`}>
            <FaPhone />
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone || ""}     
              onChange={handleChange}
            />
          </div>
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        {/* COLLEGE */}
        <div className="field-group">
          <div className={`input-field ${errors.college ? "error" : ""}`}>
            <FaUniversity />
            <input
              name="college"
              placeholder="College Name"
              value={formData.college || ""}   
              onChange={handleChange}
            />
          </div>
          {errors.college && <p className="error-text">{errors.college}</p>}
        </div>

        {/* DEPARTMENT */}
        <div className="field-group">
          <select
            name="department"
            value={formData.department || ""}  
            onChange={handleChange}
            className={errors.department ? "error-select" : ""}
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
          </select>
          {errors.department && <p className="error-text">{errors.department}</p>}
        </div>

        {/* YEAR */}
        <div className="field-group">
          <select
            name="year"
            value={formData.year || ""}       
            onChange={handleChange}
            className={errors.year ? "error-select" : ""}
          >
            <option value="">Select Year</option>
            <option value="I Year">I Year</option>
            <option value="II Year">II Year</option>
            <option value="III Year">III Year</option>
            <option value="IV Year">IV Year</option>
          </select>
          {errors.year && <p className="error-text">{errors.year}</p>}
        </div>

      </div>

      <button className="next-btn" onClick={handleNext}>
        NEXT: EVENTS
      </button>
    </div>
  );
};

export default PersonalInfo;
