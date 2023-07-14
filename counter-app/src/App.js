// import "./App.css";
import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function oneUp() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={oneUp}>Count : {count}</button>
    </div>
  );
}

function App() {
  return <Counter />;
}

export default App;
