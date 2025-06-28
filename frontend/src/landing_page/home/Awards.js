import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            Thousands of active traders and investors trust Aconova daily
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Trade in Stocks, F&O, Commodities, Mutual Funds</p>
                </li>
                <li>
                  <p>Access Live Market Insights</p>
                </li>
                <li>
                  <p>Track Portfolio Performance in Real-Time</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Instant Buy/Sell Execution</p>
                </li>
                <li>
                  <p>Modern UI, Fast Execution</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  )
}

export default Awards
