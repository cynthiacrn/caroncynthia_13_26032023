import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />}/>
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<App />);
