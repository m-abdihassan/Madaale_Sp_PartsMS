import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    cost: '',
    stockQuantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/products', product);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product', error);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} />
      </div>
      <div>
        <label>cost:</label>
        <input type="number" name="cost" value={product.cost} onChange={handleChange} />
      </div>
      <div>
        <label>Stock Quantity:</label>
        <input type="number" name="stockQuantity" value={product.stockQuantity} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;





