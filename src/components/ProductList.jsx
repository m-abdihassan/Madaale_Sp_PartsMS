import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import the CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stockQuantity: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/products/${editingProduct.id}`, formData);
      setProducts(products.map(product => 
        product.id === editingProduct.id ? formData : product
      ));
      setEditingProduct(null);
      setFormData({ name: '', description: '', cost: '', stockQuantity: '' });
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className='Spaceup'>  Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>cost</th>
              <th>Stock Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.cost}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button id='redbtn' onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingProduct && (
        <form onSubmit={handleUpdate} className="edit-form">
          <h2>Edit Product</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>cost:</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Stock Quantity:</label>
            <input
              type="number"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Product</button>
        </form>
      )}
    </div>
  );
};

export default ProductList;
