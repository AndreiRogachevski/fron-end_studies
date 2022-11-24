import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import User from './User';
import Form from './Form';

function App() {
  const [totalUsers, setTotalUsers] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/:userId/edit" element={<Form />} />
        <Route
          path="/"
          element={<Users totalUsers={(i) => setTotalUsers(i)} />}
        />
        <Route path="/:userId" element={<User total={totalUsers} />} />
      </Routes>
    </div>
  );
}

export default App;
