import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://192.168.0.158:3000/categories");
      const json = await response.json();
      setCategories(json);
    })();
  }, []);
  return (
    <>
    <h3>CATEGORIES</h3>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <NavLink to={`/category/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
