import React from 'react';

const Footer = () => {
  const linkStyle = {
    color: '#666666',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'inline-block',
    marginBottom: '5px'
  };

  const sectionTitleStyle = {
    fontWeight: '600',
    marginBottom: '10px',
    fontSize: '15px'
  };

  const textBlockStyle = {
    fontSize: '14px',
    color: '#666666',
    marginTop: '40px'
  };

  return (
    <footer style={{ backgroundColor: 'rgb(250, 250, 250)', padding: '40px 0' }}>
      <div className="container" style={{ borderTop: '1px solid #ddd', paddingTop: '40px' }}>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div
            className="col"
            style={{
              flex: '1',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px'
            }}
          >
            <img
              src="media/images/logo.jpg"
              alt="Aconova Logo"
              style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
            />
            <p style={{ fontSize: '14px', color: '#666666', margin: 0 }}>
              &copy; 2010 - 2024, Not Aconova Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col" style={{ flex: '1', minWidth: '200px' }}>
            <p style={sectionTitleStyle}>Company</p>
            <a href="#" style={linkStyle}>About</a><br />
            <a href="#" style={linkStyle}>Products</a><br />
            <a href="#" style={linkStyle}>Pricing</a><br />
            <a href="#" style={linkStyle}>Referral programme</a><br />
            <a href="#" style={linkStyle}>Careers</a><br />
            <a href="#" style={linkStyle}>Press & media</a><br />
          </div>

          <div className="col" style={{ flex: '1', minWidth: '200px' }}>
            <p style={sectionTitleStyle}>Support</p>
            <a href="#" style={linkStyle}>Contact</a><br />
            <a href="#" style={linkStyle}>Support portal</a><br />
            <a href="#" style={linkStyle}> blog</a><br />
            <a href="#" style={linkStyle}>Downloads & resources</a><br />
          </div>

          <div className="col" style={{ flex: '1', minWidth: '200px' }}>
            <p style={sectionTitleStyle}>Account</p>
            <a href="#" style={linkStyle}>Open an account</a><br />
            <a href="#" style={linkStyle}>Fund transfer</a><br />
            <a href="#" style={linkStyle}>60 day challenge</a><br />
          </div>
        </div>

        <div className="text-muted" style={textBlockStyle}>
          <p>
            Aconova Broking Ltd. is a registered stock market platform providing technology-driven solutions for investors and traders. All investment and trading activities on this platform are subject to applicable market risks and regulations. Please ensure you fully understand the associated risks before making any investments.
          </p>

          <p>
            Aconova does not offer any form of stock tips, portfolio management, or guaranteed returns. Users are advised to conduct their own research or consult with certified financial advisors before making any investment decisions. We do not authorize any third party to trade on your behalf.
          </p>

          <p>
            Always keep your mobile number and email address updated to receive timely alerts about your account activity. For any support or complaint, please contact us at <strong>support@aconova.com</strong>.
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
