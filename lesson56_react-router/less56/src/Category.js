import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import List from "./List";
export default function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://192.168.0.158:3000/categories/" + id
      );
      const json = await response.json();
      setCategory(json);
      console.log(json);
    })();
  }, [id]);
  return (
    <>
      {category && (
        <div>
          <Link to={"/"} className='black'>back</Link>
          <h1>{category.title}</h1>
          <List posts={category.posts} />
        </div>
      )}
    </>
  );
}
