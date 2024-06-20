import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem('token'),
    user: null,
  });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setAuthData({ token: null, user: null });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
