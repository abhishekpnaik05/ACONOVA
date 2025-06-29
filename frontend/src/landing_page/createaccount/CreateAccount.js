import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AconovaSignupModal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://aconova-backend1.onrender.com/api/createaccount', formData);
      alert(response.data.message); // Show success message
      navigate('/'); // Redirect to home or login page after signup
    } catch (error) {
      alert(error.response?.data?.error || 'Login failed');
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  // Inline styles
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: 'white',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#666',
    },
    formGroup: {
      marginBottom: '1.25rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '0.875rem',
    },
    submitBtn: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#003153',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontWeight: 500,
      cursor: 'pointer',
      margin: '1rem 0',
      fontSize: '0.875rem',
    },
    authLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      marginTop: '1rem',
    },
    footer: {
      marginTop: '1.5rem',
      textAlign: 'center',
      fontSize: '0.75rem',
      color: '#666',
    },
    logo: {
      display: 'block',
      margin: '0 auto 1.5rem',
      height: '24px',
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={handleClose}>
          &times;
        </button>

        <img 
          src="media/images/logo.jpg" 
          alt="ACONOVA" 
          style={styles.logo} 
        />

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password (min 8 chars)"
              style={styles.input}
              required
              minLength="8"
            />
          </div>

          <button type="submit" style={styles.submitBtn}>
            Create Account
          </button>

          <div style={styles.authLinks}>
            <span>Already have an account?</span>
            <a href="/signup">Sign Up</a>
          </div>
        </form>

        <div style={styles.footer}>
          <p>© {new Date().getFullYear()} Aconova Broking Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AconovaSignupModal;
