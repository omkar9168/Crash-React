import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  useEffect(() => {
    console.log("My Component is mounting...");
  }, []);

  useEffect(() => {
    console.log("Count got updated", count);
  }, [count, count2]);

  return (
    <div>
      <p>Count is {count}</p>
      <p>Count2 is {count2}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <button onClick={() => setCount2(count2 + 1)}>Update</button>
    </div>
  );
}

export default MyComponent;
