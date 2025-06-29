import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            src="media/images/logo.jpg" 
            style={{ 
              width: "200px", // Increased from 150px
              height: "auto",
              transition: "all 0.3s ease",
              '@media (max-width: 768px)': {
                width: "180px" // Slightly smaller on mobile
              }
            }} 
            alt="Aconova Logo" 
          />

        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none"
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div 
          className={`collapse navbar-collapse justify-content-end ${expanded ? 'show' : ''}`}
          id="navbarSupportedContent"
          style={{
            transition: "all 0.3s ease"
          }}
        >
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/product"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/pricing"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/support"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/createaccount"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#333",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                Create Account
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/signup"
                style={{
                  padding: "0.5rem 1rem",
                  fontWeight: "500",
                  color: "#003153",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "4px",
                  marginLeft: "0.5rem",
                  transition: "all 0.3s ease"
                }}
                onClick={() => setExpanded(false)}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;