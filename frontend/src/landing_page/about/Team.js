import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/abhishek.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Abhishek P</h4>
          <h6>Founder</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Abhishek P founded Aconova with a clear vision: to create a smarter, more accessible way for individuals to interact with financial markets. As a student entrepreneur, he took the initiative to build Aconova from the ground up, combining his interest in finance, technology, and innovation.
          </p>
          
          <p>I like exploring what’s new in the world of finance and tech—and when I need a break, you’ll usually find me playing badminton or cricket.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
