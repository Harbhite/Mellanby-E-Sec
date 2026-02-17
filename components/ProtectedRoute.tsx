
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { session, loading, isAdmin } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // Optional: Check for admin role if this route is strictly for admins
  // For now, we assume all protected routes are admin routes
  if (!isAdmin) {
     return <Navigate to="/" replace />; // Redirect non-admins to home
  }

  return <Outlet />;
};

export default ProtectedRoute;
