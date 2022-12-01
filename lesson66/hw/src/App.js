import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './Components/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
