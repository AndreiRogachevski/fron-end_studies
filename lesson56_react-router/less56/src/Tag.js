import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import List from "./List";
export default function Tags() {
  const { id } = useParams();
  const [tags, setTags] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.0.158:3000/tags/" + id);
      const json = await response.json();
      setTags(json.posts);
      console.log(json.posts);
    })();
  }, [id]);
  return (
    <>
      {tags && (
        <div>
          <Link to="/" className="black">back</Link>
          <List posts={tags} />
        </div>
      )}
    </>
  );
}
