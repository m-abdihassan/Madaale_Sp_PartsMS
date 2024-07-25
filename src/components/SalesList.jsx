import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SalesList.css';

const SalesLis = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/sales');
                setSales(response.data);
            } catch (error) {
                console.error('Error fetching sales', error);
            }
        };

        fetchSales();
    }, []);

    return (
        <div>
            <h2>Sale List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td data-label="ID">{sale.id}</td>
                            <td data-label="Product">{sale.product.name}</td>
                            <td data-label="Customer">{sale.customer.name}</td>
                            <td data-label="Date">{new Date(sale.saleDate).toLocaleDateString()}</td>
                            <td data-label="Quantity">{sale.quantity}</td>
                            <td data-label="Price">{sale.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesLis;

