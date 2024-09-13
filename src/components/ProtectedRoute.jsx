import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);

  if (adminOnly) {
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAdminAuthenticated) {
      return <Navigate to="/admin/login" replace />;
    }
  } else {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
