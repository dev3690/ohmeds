

import React, { createContext, useContext, useState } from 'react';

//   const navigate = useNavigate();
  const AuthContext = createContext();

export const AuthProvider = ({ children, navigate }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'user1' && password === 'user123') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      alert('Incorrect username or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
