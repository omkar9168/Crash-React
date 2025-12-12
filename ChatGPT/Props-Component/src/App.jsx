import React from "react";
import "./App.css";
import Car from "./Car";
import CarClass from "./CarClass";

function App() {
  return (
    <>
      <h1>React Props Example</h1>
      <Car brand="Mercedes" />
      <CarClass brand="BMW" />
    </>
  );
}

export default App;
