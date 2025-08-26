import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

// PUBLIC_INTERFACE
const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  /**
   * PUBLIC_INTERFACE
   * Protects routes by checking auth state and redirecting to login if unauthenticated.
   */
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
