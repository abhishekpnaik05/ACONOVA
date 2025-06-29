import React from 'react';

const Pricing = () => {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        {/* Text Content - Full width on mobile, 4 columns on desktop */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3 fs-1 ">Unbeatable pricing</h1>
          <p className="fs-5 mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a 
            href="#pricing" 
            className="btn btn-link text-decoration-none p-0 fs-5"
          >
            See Pricing <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>

        {/* Pricing Cards - Full width on mobile, 6 columns on desktop */}
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="row g-3">
            {/* Free Pricing Card */}
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded-3 h-100">
                <h2 className="display-5 mb-3">₹0</h2>
                <p className="mb-0">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
            </div>

            {/* Paid Pricing Card */}
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded-3 h-100">
                <h2 className="display-5 mb-3">₹20</h2>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;