import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const isMobile = window.innerWidth <= 768;

  const containerStyle = {
    position: isMobile ? "fixed" : "absolute",
    bottom: isMobile ? "70px" : "20px",
    left: isMobile ? "50%" : "20px",
    transform: isMobile ? "translateX(-50%)" : "none",
    width: isMobile ? "90%" : "320px",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1rem",
    zIndex: 1000,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "0.8rem",
  };

  const handleBuyClick = () => {
    axios.post("https://aconova-backend1.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    closeBuyWindow();
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "1rem" }}>
        <fieldset style={{ border: "none", marginBottom: "0.5rem" }}>
          <legend>Qty.</legend>
          <input
            type="number"
            name="qty"
            id="qty"
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
            style={inputStyle}
          />
        </fieldset>
        <fieldset style={{ border: "none" }}>
          <legend>Price</legend>
          <input
            type="number"
            name="price"
            id="price"
            step="0.05"
            onChange={(e) => setStockPrice(e.target.value)}
            value={stockPrice}
            style={inputStyle}
          />
        </fieldset>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.9rem", color: "#333" }}>
          Margin required ₹140.65
        </span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="#" className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
