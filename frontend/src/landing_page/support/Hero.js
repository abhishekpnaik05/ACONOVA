import React from 'react';

const SupportPortal = () => {
  const darkBlue = '#003366'; // Dark blue color code
  
  return (
    <div className="container-fluid p-0">
      {/* Dark Blue Background Header Section */}
      <div style={{ backgroundColor: darkBlue }} className="text-white p-4 p-md-5">
        <div className="container">
          <div className="fs-4 fw-normal mb-4">Support Portal</div>
          
          {/* Search Section */}
          <div className="mb-4">
            <div className="text-white-50 mb-3">Search for an answer or browse help topics to create a ticket</div>
            <input 
              type="text" 
              className="form-control mb-4 bg-white py-3 px-3" 
              placeholder="Eg. how do I activate F&O" 
              style={{ maxWidth: '600px' }}
            />
            
            {/* Quick Links - responsive layout */}
            <div className="d-flex flex-wrap gap-2 gap-md-3 mb-4 text-white">
              <span className="text-nowrap">Track account opening</span>
              <span className="d-none d-md-block">|</span>
              <span className="text-nowrap">Track segment activation</span>
              <span className="d-none d-md-block">|</span>
              <span className="text-nowrap">Intraday margin</span>
              <span className="d-none d-md-block">|</span>
              <span className="text-nowrap">Kite user manual</span>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Content Section */}
      <div className="container p-4 p-md-5">
        {/* Featured Section */}
        <div className="mb-5">
          <div className="mb-3">Featured</div>
          <div className="ps-3">
            <div className="mb-2">1. Current Takeovers and Delisting – January 2024</div>
            <div className="mb-2">2. Latest Intraday leverages - MIS & CO</div>
          </div>
        </div>

        {/* Track Tickets Button */}
        <div className="text-center text-md-start">
          <button 
            className="btn px-4 py-2 rounded-1"
            style={{ 
              border: `1px solid ${darkBlue}`,
              color: darkBlue,
              backgroundColor: 'transparent'
            }}
          >
            Track Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportPortal;