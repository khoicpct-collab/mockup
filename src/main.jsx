import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mockup Page Running!</h1>
      <p style={styles.text}>
        Đây là trang React + Vite chạy trên GitHub Pages.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  text: {
    fontSize: "20px",
    opacity: 0.8
  }
};
