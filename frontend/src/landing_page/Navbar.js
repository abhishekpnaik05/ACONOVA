import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Inline styles object
  const styles = {
    navbar: {
      backgroundColor: "#FFF",
      borderBottom: "1px solid #e0e0e0"
    },
    container: {
      padding: "0.5rem",
      '@media (max-width: 768px)': {
        padding: "0.5rem !important"
      }
    },
    brandImg: {
      width: "40%",
      '@media (max-width: 992px)': {
        width: "30% !important"
      },
      '@media (max-width: 768px)': {
        width: "40% !important"
      },
      '@media (max-width: 576px)': {
        width: "50% !important"
      }
    },
    navbarCollapse: {
      '@media (max-width: 992px)': {
        position: "fixed",
        top: "60px",
        left: 0,
        right: 0,
        backgroundColor: "#FFF",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000
      }
    },
    navbarNav: {
      '@media (max-width: 992px)': {
        flexDirection: "column !important"
      }
    },
    navItem: {
      '@media (max-width: 992px)': {
        margin: "0.5rem 0"
      }
    },
    navLink: {
      padding: "0.5rem 0",
      '@media (max-width: 992px)': {
        padding: "0.5rem 1rem !important"
      }
    },
    signupLink: {
      '@media (max-width: 992px)': {
        display: "inline-block",
        marginTop: "1rem",
        backgroundColor: "#003153",
        color: "white !important",
        borderRadius: "4px",
        textAlign: "center"
      }
    },
    navbarToggler: {
      transition: "transform 0.3s ease",
      transform: isCollapsed ? "rotate(0deg)" : "rotate(90deg)"
    }
  };

  // Function to handle responsive styles
  const getResponsiveStyles = (baseStyles) => {
    const result = { ...baseStyles };
    Object.keys(baseStyles).forEach(key => {
      if (key.startsWith('@media')) {
        const mediaQuery = key.replace('@media ', '');
        if (window.matchMedia(mediaQuery).matches) {
          Object.assign(result, baseStyles[key]);
        }
      }
    });
    return result;
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={styles.navbar}>
      <div className="container" style={getResponsiveStyles(styles.container)}>
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.jpg"
            style={getResponsiveStyles(styles.brandImg)}
            alt="Logo"
          />
        </Link>
        <button
          className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={styles.navbarToggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
          style={getResponsiveStyles(styles.navbarCollapse)}
        >
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0" style={getResponsiveStyles(styles.navbarNav)}>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active" 
                  to="/about"
                  style={getResponsiveStyles(styles.navLink)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active" 
                  to="/product"
                  style={getResponsiveStyles(styles.navLink)}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active" 
                  to="/pricing"
                  style={getResponsiveStyles(styles.navLink)}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active" 
                  to="/support"
                  style={getResponsiveStyles(styles.navLink)}
                >
                  Support
                </Link>
              </li>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active" 
                  to="/createaccount"
                  style={getResponsiveStyles(styles.navLink)}
                >
                  Create Account
                </Link>
              </li>
              <li className="nav-item" style={getResponsiveStyles(styles.navItem)}>
                <Link 
                  className="nav-link active signup-link" 
                  to="/signup"
                  style={getResponsiveStyles({...styles.navLink, ...styles.signupLink})}
                >
                  Signup
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;