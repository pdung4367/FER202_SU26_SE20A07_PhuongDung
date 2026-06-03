// Tạo hello.jsx tạo hello react để react in đậm

import React from 'react';
function Hello() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        fontSize: "48px"
      }}
    >
      <span
        style={{
          color: "black",
          fontWeight: "400"
        }}
      >
        Hello
      </span>

      <span
        style={{
          color: "blue",
          fontWeight: "700",
          marginLeft: "12px"
        }}
      >
        React
      </span>
    </div>
  );
}


export default Hello;

