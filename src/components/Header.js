import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="d-flex justify-content-between p-3 bg-dark text-white">
      <h1>CMS Dashboard</h1>
      {user && (
        <button className="btn btn-outline-light" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
