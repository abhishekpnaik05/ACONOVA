import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenAccount = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container p-3 p-md-5 mb-3 mb-md-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-3 mt-md-5 fs-3 fs-md-2 ">Open an Aconova account</h1>
          <p className="mb-4 mb-md-5 fs-5 fs-md-6">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="btn btn-primary py-2 px-4 fs-5 mb-3 mb-md-5"
            style={{ 
              backgroundColor: '#003153',
              minWidth: '200px',
              width: 'auto',
              '@media (max-width: 768px)': {
                width: '100%'
              }
            }}
            onClick={handleSignupClick}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;