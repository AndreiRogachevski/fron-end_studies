import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import Posts from "./Posts";
import Post from "./Post";
import Tags from "./Tags";
function App() {

  return (
    <div className="App">
      <aside>
        <Categories />
        {/* <Tags /> */}
      </aside>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/posts/:id' element={<Post />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
export default App;
