import React from 'react'

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/f-page (1).png"
          alt="Hero Image"
          className="mb-20 "
        />
        <h1 className="mt-5">Smarter Investing. Simplified.</h1>
        <p>
          A next-gen platform for stocks, F&O, mutual funds & more.
        </p>
        <button
          className="p-2 btn fs-5 mb-5"
          style={{ 
            width: "20%", 
            margin: "0 auto", 
            backgroundColor: "#003153", 
            color: "white", 
            border: "none"
  }}
>
  Signup Now
</button>

      </div>
    </div>
  )
}

export default Hero
