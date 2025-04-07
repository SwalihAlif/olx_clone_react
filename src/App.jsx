import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Create from './Pages/Create'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
