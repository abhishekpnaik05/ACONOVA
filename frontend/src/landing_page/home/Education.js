import React from 'react';

const Education = () => {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        {/* Image Column - Shows first on mobile */}
        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start mb-4 mb-md-0">
          <img 
            src="media/images/education.svg" 
            className="img-fluid" 
            style={{ maxWidth: "70%", height: "auto" }} 
            alt="Market Education"
          />
        </div>

        {/* Content Column - Shows second on mobile */}
        <div className="col-12 col-md-6 order-1 order-md-2">
          <h1 className="mb-3 fs-2 ">Free and open market education</h1>
          
          <div className="mb-4">
            <p className="mb-3">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a 
              href="#varsity" 
              className="btn btn-link text-decoration-none p-0 fw-bold"
            >
              Varsity <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mb-4">
            <p className="mb-3">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a 
              href="#tradingqa" 
              className="btn btn-link text-decoration-none p-0 fw-bold"
            >
              TradingQ&A <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;