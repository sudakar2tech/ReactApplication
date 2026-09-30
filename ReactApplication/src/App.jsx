import React from 'react';
import Login from './Login';
import Home from './Home';
import Employee from './Employee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
     
    </div>  );
}

export default App;