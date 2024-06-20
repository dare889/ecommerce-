import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
  const { authData } = useContext(AuthContext);

  return authData.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
