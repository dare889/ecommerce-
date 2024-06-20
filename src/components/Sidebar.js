import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light border-right p-3">
      <ul className="list-unstyled">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
