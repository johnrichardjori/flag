// XModal.js

import React, { useState, useRef, useEffect } from 'react';
import './Xmodel.css';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });
  const [validationError, setValidationError] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setValidationError('');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;
    
    if (!username || !email || !phone || !dob) {
      setValidationError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      setValidationError('Invalid email. Please check your email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setValidationError('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate >= today) {
      setValidationError('Invalid date of birth.');
      return;
    }

    // Handle successful form submission
    setValidationError('');
    handleCloseModal();
  };

  return (
    <div>
      <button className="open-button" onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" onChange={handleInputChange} />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" onChange={handleInputChange} />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" onChange={handleInputChange} />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" onChange={handleInputChange} />
              <button type="submit" className="submit-button">Submit</button>
            </form>
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
