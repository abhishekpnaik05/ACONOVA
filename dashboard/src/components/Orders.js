import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    card: {
      background: "#fff",
      padding: "2rem 1.5rem",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
      maxWidth: "400px",
      width: "100%",
    },
    message: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "1.5rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#4a90e2",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "1rem",
      display: "inline-block",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.message}>You haven't placed any orders today</p>

        <Link to={"/"} style={styles.button}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
