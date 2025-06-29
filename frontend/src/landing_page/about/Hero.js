import React from 'react';

const Hero = () => {
  return (
    <div className="container">
      {/* Hero Heading Section */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5 mb-4 mb-md-5">
        <div className="col-12">
          <h1 className="fs-1 fs-md-2 text-center fw-bold" style={{ lineHeight: '1.4' }}>
            We introduced a new era in discount broking in India.
            <br className="d-none d-md-block" />
            Now, we're leading the way with cutting-edge technology.
          </h1>
        </div>
      </div>

      {/* Two Column Content Section */}
      <div 
        className="row p-3 p-md-5 mt-3 mt-md-5 border-top text-muted"
        style={{ lineHeight: "1.8" }}
      >
        {/* Left Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p className="fs-5 fs-md-6 mb-4">
            At Aconova, we are Accelerating a New Era in the world of finance and investing. Born out of the desire to revolutionize how individuals interact with capital markets, Aconova was founded to break down traditional barriers such as high costs, outdated systems, and lack of accessibility.
          </p>
          <p className="fs-5 fs-md-6 mb-4">
            We kick-started operations on June 2025 with a clear mission: to create a seamless, tech-driven ecosystem that empowers traders and investors across India. The name Aconova reflects our vision—"Accelerating a New Era"—where financial growth, innovation, and inclusivity go hand-in-hand.
          </p>
          <p className="fs-5 fs-md-6 mb-4 mb-md-0">
            Today, our modern pricing models and powerful in-house technology have helped us become a leading name in India's financial landscape. 
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p className="fs-5 fs-md-6 mb-4">
            Beyond trading, we are deeply committed to education and community. Through our open learning platforms and investor forums, we enable people to make informed and confident decisions.
          </p>
          <p className="fs-5 fs-md-6 mb-4">
            Our innovation doesn't stop there. With Aconova Labs, our fintech fund and incubator, we invest in startups that share our goal of transforming India's financial future.
          </p>
          <p className="fs-5 fs-md-6">
            Every day at Aconova is a step forward—towards a brighter, smarter financial world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;