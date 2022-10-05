import { Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './Users';
import User from './User';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users/:id+:firstName+:lastName" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
