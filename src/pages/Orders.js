// pages/Orders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAdminOrders = async () => {
        try {
          const response = await axios.get(`${config.apiBaseUrl}/api/admin/orders`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setOrders(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
      fetchAdminOrders();
  }, []);

  

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user.username}</td>
              <td>${order.total_price.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                {/* Add view and update status functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
