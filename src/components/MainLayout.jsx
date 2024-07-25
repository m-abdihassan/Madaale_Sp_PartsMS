import React from 'react';
import { Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/">Overview</Link></li>
           <li><Link to="/products">Products</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          
          <li><Link to="/customers">Customers</Link></li>
        
          <li><Link to="/Register">Register</Link></li>
        </ul>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
