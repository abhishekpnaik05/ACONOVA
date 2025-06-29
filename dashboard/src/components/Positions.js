import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  const styles = {
    container: {
      padding: "1rem",
      minHeight: "100vh",
      backgroundColor: "#f7f8fa",
      fontFamily: "sans-serif",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "1rem",
      textAlign: "center",
    },
    tableWrapper: {
      overflowX: "auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "700px",
    },
    th: {
      textAlign: "left",
      padding: "0.75rem",
      backgroundColor: "#f0f2f5",
      fontWeight: "600",
      fontSize: "0.875rem",
      borderBottom: "1px solid #e0e0e0",
    },
    td: {
      padding: "0.75rem",
      fontSize: "0.875rem",
      borderBottom: "1px solid #eee",
    },
    profit: {
      color: "#1ba94c",
      fontWeight: "600",
    },
    loss: {
      color: "#e53935",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Positions ({positions.length})</h3>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Instrument</th>
              <th style={styles.th}>Qty.</th>
              <th style={styles.th}>Avg.</th>
              <th style={styles.th}>LTP</th>
              <th style={styles.th}>P&amp;L</th>
              <th style={styles.th}>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? styles.profit : styles.loss;
              const dayClass = stock.isLoss ? styles.loss : styles.profit;

              return (
                <tr key={index}>
                  <td style={styles.td}>{stock.product}</td>
                  <td style={styles.td}>{stock.name}</td>
                  <td style={styles.td}>{stock.qty}</td>
                  <td style={styles.td}>{stock.avg.toFixed(2)}</td>
                  <td style={styles.td}>{stock.price.toFixed(2)}</td>
                  <td style={{ ...styles.td, ...profClass }}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td style={{ ...styles.td, ...dayClass }}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
