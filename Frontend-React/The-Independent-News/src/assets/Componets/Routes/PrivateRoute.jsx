import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../Provider/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    // Redirect to login and store the requested page in state
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
