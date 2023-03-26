import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import ProtectedRoute from "./components/ProtectedRoute";
import { Home, SignIn, User } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protected Route */}
        <Route path="/user" element={<ProtectedRoute component={User} />}/>
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(<App />);
