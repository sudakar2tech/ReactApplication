import React from 'react';
import Login from './Login';
import Home from './Home';
import Employee from './Employee';
import Manager from './Manager';
import User from './User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/user" element={<User />} />
      </Routes>
     
    </div>  );
}

export default App;