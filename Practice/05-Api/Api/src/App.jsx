import { useEffect, useState } from "react";
import "./App.css";
import { getPosts } from "./api";
import PostCard from "./components/PostCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  });
  return (
    <div>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
