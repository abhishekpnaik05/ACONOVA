import React from 'react';

const Footer = () => {
  // Styles object
  const styles = {
    footer: {
      backgroundColor: '#fafafa',
      padding: '40px 0'
    },
    container: {
      borderTop: '1px solid #ddd',
      paddingTop: '40px'
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      '@media (max-width: 768px)': {
        gap: '30px'
      }
    },
    column: {
      flex: '1',
      minWidth: '200px'
    },
    logoColumn: {
      flex: '1',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px'
    },
    logo: {
      width: '150px',
      height: 'auto',
      marginBottom: '10px'
    },
    copyright: {
      fontSize: '14px',
      color: '#666666',
      margin: 0
    },
    sectionTitle: {
      fontWeight: '600',
      marginBottom: '15px',
      fontSize: '15px'
    },
    link: {
      color: '#666666',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
      marginBottom: '10px',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#003153'
      }
    },
    textBlock: {
      fontSize: '14px',
      color: '#666666',
      marginTop: '40px',
      lineHeight: '1.6'
    },
    strong: {
      color: '#333'
    }
  };

  // Function to handle responsive styles
  const getStyles = (baseStyles) => {
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
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div className="row" style={getStyles(styles.row)}>
          {/* Logo and Copyright Column */}
          <div style={getStyles(styles.logoColumn)}>
            <img
              src="media/images/logo.jpg"
              alt="Aconova Logo"
              style={styles.logo}
            />
            <p style={styles.copyright}>
              &copy; 2010 - 2024, Not Aconova Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links Column */}
          <div style={getStyles(styles.column)}>
            <p style={styles.sectionTitle}>Company</p>
            <a href="#" style={styles.link}>About</a>
            <a href="#" style={styles.link}>Products</a>
            <a href="#" style={styles.link}>Pricing</a>
            <a href="#" style={styles.link}>Referral programme</a>
            <a href="#" style={styles.link}>Careers</a>
            <a href="#" style={styles.link}>Press & media</a>
          </div>

          {/* Support Links Column */}
          <div style={getStyles(styles.column)}>
            <p style={styles.sectionTitle}>Support</p>
            <a href="#" style={styles.link}>Contact</a>
            <a href="#" style={styles.link}>Support portal</a>
            <a href="#" style={styles.link}>Blog</a>
            <a href="#" style={styles.link}>Downloads & resources</a>
          </div>

          {/* Account Links Column */}
          <div style={getStyles(styles.column)}>
            <p style={styles.sectionTitle}>Account</p>
            <a href="#" style={styles.link}>Open an account</a>
            <a href="#" style={styles.link}>Fund transfer</a>
            <a href="#" style={styles.link}>60 day challenge</a>
          </div>
        </div>

        {/* Legal Text Block */}
        <div style={getStyles(styles.textBlock)}>
          <p>
            Aconova Broking Ltd. is a registered stock market platform providing technology-driven solutions for investors and traders. All investment and trading activities on this platform are subject to applicable market risks and regulations. Please ensure you fully understand the associated risks before making any investments.
          </p>

          <p>
            Aconova does not offer any form of stock tips, portfolio management, or guaranteed returns. Users are advised to conduct their own research or consult with certified financial advisors before making any investment decisions. We do not authorize any third party to trade on your behalf.
          </p>

          <p>
            Always keep your mobile number and email address updated to receive timely alerts about your account activity. For any support or complaint, please contact us at <strong style={styles.strong}>support@aconova.com</strong>.
          </p>

          <p>
            KYC (Know Your Customer) is mandatory before investing. Completing KYC once through a SEBI-registered intermediary allows you to invest across platforms without repeating the process.
          </p>

          <p>
            Aconova Broking Ltd., Registered Office: #123, Innovation Park, 2nd Cross, Tech Valley, Bengaluru - 560001, Karnataka, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;