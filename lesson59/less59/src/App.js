import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Users from './features/Users/Users';
import User from './features/Users/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
      <Users />
    </div>
  );
}

export default App;
