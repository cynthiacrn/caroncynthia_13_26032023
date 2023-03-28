import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

function ProtectedRoute({ component: Component, ...props }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated && !localStorage.getItem('token')) {
    return <Navigate to="/login" replace />
  }

  return <Component {...props} />
}

export default ProtectedRoute