import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import User from './User';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Users />} />
        <Route path="/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
