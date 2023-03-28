import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StoreProvider from "./store"
import { restoreToken } from "./store/reducers/auth"
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoute from "./components/ProtectedRoute"
import './index.css'

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
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root'))
  .render(
    <StoreProvider>
      <App />
    </StoreProvider>
  )
