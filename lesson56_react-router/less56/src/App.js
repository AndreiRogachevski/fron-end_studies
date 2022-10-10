import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import Posts from "./Posts";
import Post from "./Post";
import Category from "./Category";
import Tags from "./Tags";
import Tag from "./Tag";
function App() {
  return (
    <div className="App">
      <aside>
        <Categories />
        <Tags/>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/tags/:id" element={<Tag />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
