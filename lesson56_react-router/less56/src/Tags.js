import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Tags() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.0.158:3000/tags");
      const json = await response.json();
      setTags(json);
    })();
  }, []);
  return (
    <>
    <h3>TAGS</h3>
      
        {tags.map((item) => (
          <span key={item.id}>
            <NavLink to={`/tags/${item.id}`}>{item.title}</NavLink>
          </span>
        ))}
      
    </>
  );
}
