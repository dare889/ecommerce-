import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${config.apiBaseUrl}/api/products`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                {/* Add edit and delete functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
