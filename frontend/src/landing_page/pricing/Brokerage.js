import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-top">
        <div className="col-12 col-md-8 p-3 p-md-4">
          <a href="#" style={{ textDecoration: "none", color: "#003153" }} className="d-block mb-3">
            <h3 className="fs-5 fw-bold">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted ps-3 ps-md-4"
            style={{ lineHeight: "1.8", fontSize: "0.9rem" }}
          >
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-2">Digital contract notes will be sent via e-mail.</li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-3 p-md-4 d-flex align-items-center justify-content-center">
          <a href="#" style={{ textDecoration: "none", color: "#003153" }} className="d-block">
            <h3 className="fs-5 fw-bold">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage