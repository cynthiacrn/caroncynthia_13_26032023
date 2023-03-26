import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import StoreProvider from "./store";
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import './index.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* Protected Route */}
          <Route path="/user" element={<ProtectedRoute component={User} />}/>
        </Routes>
      </Router>
    </StoreProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />);
