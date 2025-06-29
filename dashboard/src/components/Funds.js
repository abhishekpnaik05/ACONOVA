import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      {/* Top notice and buttons */}
      <div
        style={{
          backgroundColor: "#f1f5f9",
          padding: "1rem",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          Instant, zero-cost fund transfers with UPI
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="#"
            style={{
              backgroundColor: "#1ba94c",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Add funds
          </Link>
          <Link
            to="#"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Equity and Commodity Columns */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* Equity Section */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            padding: "1rem",
          }}
        >
          <h4 style={{ marginBottom: "1rem" }}>Equity</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <Row label="Available margin" value="4,043.10" highlight />
            <Row label="Used margin" value="3,757.30" />
            <Row label="Available cash" value="4,043.10" />
            <hr />
            <Row label="Opening Balance" value="4,043.10" />
            <Row label="Opening Balance" value="3,736.40" />
            <Row label="Payin" value="4,064.00" />
            <Row label="SPAN" value="0.00" />
            <Row label="Delivery margin" value="0.00" />
            <Row label="Exposure" value="0.00" />
            <Row label="Options premium" value="0.00" />
            <hr />
            <Row label="Collateral (Liquid funds)" value="0.00" />
            <Row label="Collateral (Equity)" value="0.00" />
            <Row label="Total Collateral" value="0.00" />
          </div>
        </div>

        {/* Commodity Section */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            borderRadius: "10px",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p style={{ marginBottom: "1rem" }}>You don't have a commodity account</p>
          <Link
            to="#"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value, highlight = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.95rem",
        fontWeight: highlight ? "600" : "400",
        color: highlight ? "#1ba94c" : "#333",
      }}
    >
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default Funds;
