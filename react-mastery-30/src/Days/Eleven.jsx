import React, { useState } from "react";

const Eleven = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      <div style={{ padding: "3rem" }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div
        className="bgcolor"
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "0.5rem",
          padding: "3rem",
          margin: "2rem",
          backgroundColor: color,
        }}
      >
        <p style={{ fontSize: "2rem", color: "#fff" }}>{color}</p>
      </div>
    </>
  );
};

export default Eleven;

// Color picker
