import { React, useEffect, useState } from "react";
import "./App.css";
// import Card from "./Card";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/c/85d4-ffce-4715-8fdd")
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* <Card
        title={"Web Developer"}
        desc={"Learning how to build a website in React"}
      />
      <Card title={"Omkar Ghadge"} desc={"He is very good at coding"} /> */}
      <h1>Your API data is :</h1>
      {users && <pre>{JSON.stringify(users,null,10)}</pre>}
    </>
  );
};

export default App;
