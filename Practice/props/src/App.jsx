import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="parent">
      <Cards user="Omkar" age={22} />
      <Cards user="Yash" age={21} />
      <Cards user="Harish" age={23} />
    </div>
  );
};

export default App;
