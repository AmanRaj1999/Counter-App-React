import React from "react";
import { useState } from "react";
import "./index.css";

export const Counter = () => {
  let [count, setCount] = useState(0);

  function oneUp() {
    setCount(count + 1);
  }

  function oneDown() {
    if (count === 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div className="app-container" style={{ height: "100vh" }}>
      <div className="content-conatiner">
        <h1 className="heading">Counter</h1>

        <p className="counter">{count}</p>
        <div>
          <button className="increase-button" onClick={oneUp}>
            Increment
          </button>

          <button className="decrease-button" onClick={oneDown}>
            Decrement
          </button>
        </div>
        <button className="reset-button" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
