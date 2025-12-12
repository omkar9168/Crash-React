import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Your custom api is :</h1>
      <h2>{data && <pre>{JSON.stringify(data, null, 10)}</pre>}</h2>
    </div>
  );
}

export default App;
