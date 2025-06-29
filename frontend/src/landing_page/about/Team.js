import React from 'react';

const Team = () => {
  return (
    <div className="container">
      {/* Section Heading */}
      <div className="row p-3 mt-3 mt-md-5 border-top">
        <div className="col-12">
          <h1 className="text-center fs-1 fw-bold mb-4 mb-md-5">People</h1>
        </div>
      </div>

      {/* Team Member Profile */}
      <div 
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8" }}
      >
        {/* Image Column - Full width on mobile */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center order-2 order-md-1">
          <img
            src="media/images/abhishek.jpg"
            className="img-fluid"
            style={{ 
              borderRadius: "50%",
              width: "200px",
              maxWidth: "70%",
              height: "auto",
              objectFit: "cover",
              aspectRatio: "1/1"
            }}
            alt="Abhishek P, Founder of Aconova"
          />
          <div className="mt-4 mt-md-5">
            <h4 className="fw-bold mb-1">Abhishek P</h4>
            <h6 className="text-muted">Founder</h6>
          </div>
        </div>

        {/* Bio Column - Full width on mobile */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-1 order-md-2">
          <div className="fs-5 mb-4">
            <p>
              Abhishek P founded Aconova with a clear vision: to create a smarter, more accessible way for individuals to interact with financial markets. As a student entrepreneur, he took the initiative to build Aconova from the ground up, combining his interest in finance, technology, and innovation.
            </p>
            
            <p className="mb-4">
              I like exploring what's new in the world of finance and tech—and when I need a break, you'll usually find me playing badminton or cricket.
            </p>
            
            <p className="mb-0">
              Connect on {' '}
              <a href="#" className="text-decoration-none fw-bold">Homepage</a> / {' '}
              <a href="#" className="text-decoration-none fw-bold">TradingQnA</a> /{' '}
              <a href="#" className="text-decoration-none fw-bold">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;