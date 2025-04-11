import React, { useState } from 'react';
import swal from 'sweetalert';

const Main = () => {
  const [count, setCount] = useState(0);

  const btnBaseStyle = {
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Deep Blue to Purple Gradient
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
          color: "#ffffff", // White text for contrast
        }}
      >
        Counter: {count}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setCount(count + 1)}
          style={{
            ...btnBaseStyle,
            backgroundColor: "#00c9ff", // Electric Blue
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0096c7")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#00c9ff")}
        >
          Increment
        </button>

        <button
          onClick={() =>
            count > 0
              ? setCount(count - 1)
              : swal("Are you Crazy!", "Value of Counter can't be Negative!", "error")
          }
          style={{
            ...btnBaseStyle,
            backgroundColor: "#d32f2f", // Bold Dark Red
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b71c1c")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#d32f2f")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Main;
