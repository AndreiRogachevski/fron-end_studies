import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './Users';
import User from './User';
import List from './List';
function App() {
  return (
    <div className="App">
      <aside>
        <List />
      </aside>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
