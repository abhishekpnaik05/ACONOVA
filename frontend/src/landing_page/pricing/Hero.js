import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-bottom text-center">
        <h1 className="display-5 display-md-3">Pricing</h1>
        <h3 className="text-muted mt-2 mt-md-3 fs-6 fs-md-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-3 p-md-5 mt-3 mt-md-5 text-center">
        <div className="col-12 col-md-4 p-3 p-md-4 mb-4 mb-md-0">
          <img src="media/images/pricingEquity.svg" className="img-fluid" style={{maxHeight: '80px'}} />
          <h1 className="fs-4 fs-md-3 mt-3">Free equity delivery</h1>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4 mb-4 mb-md-0">
          <img src="media/images/intradayTrades.svg" className="img-fluid" style={{maxHeight: '80px'}} />
          <h1 className="fs-4 fs-md-3 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-6">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4">
          <img src="media/images/pricingEquity.svg" className="img-fluid" style={{maxHeight: '80px'}} />
          <h1 className="fs-4 fs-md-3 mt-3">Free direct MF</h1>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero