import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  console.log('ProtectedRoute: isAuthenticated:', isAuthenticated, 'loading:', loading);

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking auth
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute: Not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    console.log('ProtectedRoute: Not admin, redirecting to subscriptions');
    return <Navigate to="/subscriptions" replace />;
  }

  console.log('ProtectedRoute: Access granted');
  return children;
};

export default ProtectedRoute;
