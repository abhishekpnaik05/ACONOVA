import React from 'react';

const Hero = () => {
  return (
    <div className="container p-4 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10">
          <img
            src="media/images/f-page (1).png"
            alt="Hero"
            className="img-fluid mb-4"
          />
          <h1 className="mt-3 fs-3 fs-md-1">Smarter Investing. Simplified.</h1>
          <p className="fs-6">
            A next-gen platform for stocks, F&O, mutual funds & more.
          </p>
          <button
            className="btn btn-primary px-4 py-2 fs-6 mt-3"
            style={{
              backgroundColor: "#003153",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
