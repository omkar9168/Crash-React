// import React, { useEffect, useState } from "react";
import "./App.css";
import TImer from "./TImer";

// import MyComponent from "./MyComponent";

function App() {
  // const [isVisible, setVisible] = useState(true);

  // useEffect(() => {
  //   console.log("App component is mounting.....");

  //   return function(){
  //     console.log("Unmounting.......")
  //   }

  // }, []);
  return (
    <div>
      {/* <p>Hey There </p>
      {isVisible ? <MyComponent /> : <></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button> */}
      <TImer></TImer>
    </div>
  );
}

export default App;
