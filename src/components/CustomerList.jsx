// src/components/CustomerList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CustomerForm from './CustomerForm';
// import CustomerItem from './CustomerItem';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/customers');
//         setCustomers(response.data);
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   const addCustomer = (customer) => {
//     setCustomers([...customers, customer]);
//   };

//   return (
//     <div>
//       <h2>Customer List</h2>
//       <CustomerForm onAddCustomer={addCustomer} />
//       {customers.map((customer) => (
//         <CustomerItem key={customer.id} customer={customer} />
//       ))}
//     </div>
//   );
// };

// export default CustomerList;
//////////////////////////////////////////////
// src/components/CustomerList.jsx
// src/components/CustomerList.jsx
// src/components/CustomerList.jsx
// 



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomerList.css'; // Import the CSS file for styling

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/customers/${id}`);
      setCustomers(customers.filter(customer => customer.id !== id));
    } catch (error) {
      console.error('Error deleting customer', error);
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setFormData(customer);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/customers/${editingCustomer.id}`, formData);
      setCustomers(customers.map(customer => 
        customer.id === editingCustomer.id ? formData : customer
      ));
      setEditingCustomer(null);
      setFormData({ name: '', email: '', phone: '', address: '' });
    } catch (error) {
      console.error('Error updating customer', error);
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
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers available</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>
                  <button onClick={() => handleEdit(customer)}>Edit</button>
                  <button onClick={() => handleDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingCustomer && (
        <form onSubmit={handleUpdate} className="edit-form">
          <h2>Edit Customer</h2>
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
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Customer</button>
        </form>
      )}
    </div>
  );
};

export default CustomerList;


