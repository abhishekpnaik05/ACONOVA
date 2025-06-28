import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenAccount = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    // Redirect to signup page
    navigate('/signup');
    // If you're not using React Router, use:
    // window.location.href = '/signup';
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Aconova account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", backgroundColor: '#003153' }}
          onClick={handleSignupClick}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;