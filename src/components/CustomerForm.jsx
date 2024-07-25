import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/customers', customer);
      alert('Customer added successfully!');
      setCustomer({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    } catch (error) {
      console.error('Error adding customer', error);
      alert('Failed to add customer');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <h2>Add Customer</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
