import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return <Component {...props} />
}

export default ProtectedRoute;