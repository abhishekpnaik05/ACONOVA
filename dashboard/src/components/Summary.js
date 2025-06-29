import React from "react";

// ✅ Get query param from URL
const getQueryParam = (key) => {
  return new URLSearchParams(window.location.search).get(key);
};

const Summary = () => {
  const userName = getQueryParam("name") || "User";

  const styles = {
    container: {
      padding: "1rem",
      width: "100%",
      boxSizing: "border-box",
    },
    greeting: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      color: "#333",
    },
    card: {
      background: "#fff",
      padding: "1rem",
      marginBottom: "1rem",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
    },
    sectionTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#666",
      marginBottom: "0.75rem",
    },
    summaryData: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    mainMetric: {
      display: "flex",
      flexDirection: "column",
    },
    mainValue: {
      fontSize: "1.5rem",
      margin: "0",
      color: "#111",
    },
    mainLabel: {
      fontSize: "0.9rem",
      color: "#888",
      margin: "0",
    },
    subMetrics: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3rem",
    },
    subMetricRow: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.95rem",
      color: "#555",
    },
    subMetricValue: {
      fontWeight: "500",
      color: "#111",
    },
    profit: {
      color: "#2fa360",
    },
    small: {
      fontSize: "0.8rem",
      marginLeft: "0.25rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.greeting}>
        <h2>Hi, {userName}!</h2>
      </div>

      <div style={styles.card}>
        <h4 style={styles.sectionTitle}>Equity</h4>
        <div style={styles.summaryData}>
          <div style={styles.mainMetric}>
            <h3 style={styles.mainValue}>₹3.74k</h3>
            <p style={styles.mainLabel}>Margin available</p>
          </div>
          <div style={styles.subMetrics}>
            <p style={styles.subMetricRow}>
              Margins used <span style={styles.subMetricValue}>₹0</span>
            </p>
            <p style={styles.subMetricRow}>
              Opening balance <span style={styles.subMetricValue}>₹3.74k</span>
            </p>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h4 style={styles.sectionTitle}>Holdings (13)</h4>
        <div style={styles.summaryData}>
          <div style={styles.mainMetric}>
            <h3 style={{ ...styles.mainValue, ...styles.profit }}>
              ₹1.55k <small style={styles.small}>+5.20%</small>
            </h3>
            <p style={styles.mainLabel}>P&amp;L</p>
          </div>
          <div style={styles.subMetrics}>
            <p style={styles.subMetricRow}>
              Current Value <span style={styles.subMetricValue}>₹31.43k</span>
            </p>
            <p style={styles.subMetricRow}>
              Investment <span style={styles.subMetricValue}>₹29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
