import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We introduced a new era in discount broking in India.
          <br />
          Now, we’re leading the way with cutting-edge technology.


        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            At Aconova, we are Accelerating a New Era in the world of finance and investing. Born out of the desire to revolutionize how individuals interact with capital markets, Aconova was founded to break down traditional barriers such as high costs, outdated systems, and lack of accessibility.
          </p>
          <p>
            We kick-started operations on June 2025 with a clear mission: to create a seamless, tech-driven ecosystem that empowers traders and investors across India. The name Aconova reflects our vision—“Accelerating a New Era”—where financial growth, innovation, and inclusivity go hand-in-hand.
          </p>
          <p>
            Today, our modern pricing models and powerful in-house technology have helped us become a leading name in India's financial landscape. 
          </p>
        </div>
        <div className="col-6 p-5">
          
          <p>
            Beyond trading, we are deeply committed to education and community. Through our open learning platforms and investor forums, we enable people to make informed and confident decisions.
          </p>
          <p>
            {/* <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a> */}
            Our innovation doesn't stop there. With Aconova Labs, our fintech fund and incubator, we invest in startups that share our goal of transforming India's financial future.
          </p>
          <p>
            Every day at Aconova is a step forward—towards a brighter, smarter financial world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
