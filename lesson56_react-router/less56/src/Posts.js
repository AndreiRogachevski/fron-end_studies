import { useState, useEffect } from "react";
import List from "./List";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.0.158:3000/posts");
      const json = await response.json();
      setPosts(json);
    })();
  }, []);
  return (
    <List posts={posts}></List>
  );
}
