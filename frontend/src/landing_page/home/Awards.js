import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-6 p-4 mt-md-5">
          <h1 className="text-center text-md-start">Largest stock broker in India</h1>
          <p className="mb-4 text-center text-md-start">
            Thousands of active traders and investors trust Aconova daily
          </p>

          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="ps-3">
                <li><p>Trade in Stocks, F&O, Commodities, Mutual Funds</p></li>
                <li><p>Access Live Market Insights</p></li>
                <li><p>Track Portfolio Performance in Real-Time</p></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="ps-3">
                <li><p>Instant Buy/Sell Execution</p></li>
                <li><p>Modern UI, Fast Execution</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-start mt-4">
            <img src="media/images/pressLogos.png" alt="Press Logos" style={{ width: "90%", maxWidth: "400px" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
