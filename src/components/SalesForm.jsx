import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesForm = () => {
  const [sale, setSale] = useState({
    productId: '',
    customerId: '',
    saleDate: '',
    quantity: '',
    price: ''
  });

  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

// Fetch products and customers
useEffect(() => {
  const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:8080/api/products');
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching products', error);
      }
  };

  const fetchCustomers = async () => {
      try {
          const response = await axios.get('http://localhost:8080/api/customers');
          setCustomers(response.data);
      } catch (error) {
          console.error('Error fetching customers', error);
      }
  };

  fetchProducts();
  fetchCustomers();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale((prevSale) => ({
      ...prevSale,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/sales', {
            product: { id: sale.productId }, // Send the product ID
            customer: { id: sale.customerId }, // Send the customer ID
            saleDate: sale.saleDate,
            quantity: sale.quantity,
            price: sale.price
        });
        alert('Sale added successfully!');
        setSale({
            productId: '',
            customerId: '',
            saleDate: '',
            quantity: '',
            price: ''
        });
    } catch (error) {
        console.error('Error adding sale', error);
        alert('Failed to add sale');
    }
};
  return (
    <form onSubmit={handleSubmit} className="sale-form">
      <h2>Add Sale</h2>
      <div>
        <label>Product:</label>
        <select
          name="productId"
          value={sale.productId}
          onChange={handleChange}
          required
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Customer:</label>
        <select
          name="customerId"
          value={sale.customerId}
          onChange={handleChange}
          required
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sale Date:</label>
        <input
          type="date"
          name="saleDate"
          value={sale.saleDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={sale.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={sale.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Sale</button>
    </form>
  );
};

export default SalesForm;



