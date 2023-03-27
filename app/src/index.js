import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import StoreProvider from "./store";
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import './index.css';
import {useDispatch} from "react-redux";
import {restoreToken} from "./store/reducers/auth";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(restoreToken(token))
    }
  }, [])

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

createRoot(document.getElementById('root'))
  .render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
