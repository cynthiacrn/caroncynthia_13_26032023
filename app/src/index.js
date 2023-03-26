import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import ProtectedRoute from "./components/ProtectedRoute";
import { Home, SignIn, User } from './pages'
import StoreProvider from "./store";

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
