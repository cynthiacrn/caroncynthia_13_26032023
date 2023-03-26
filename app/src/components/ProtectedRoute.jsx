import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedRoute({ component: Component, ...props }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return <Component {...props} />
}

export default ProtectedRoute;