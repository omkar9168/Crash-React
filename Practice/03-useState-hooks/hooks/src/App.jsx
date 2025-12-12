import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="pr">Count is {count}</p>
      <h4>Number is {count % 2 === 0 ? "Even" : "Odd"}</h4>
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn">
        Decrement -
      </button>
    </div>
  );
}

export default App;
