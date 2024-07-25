import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OverviewPage from './Pages/OverviewPage';
import CustomerPage from './Pages/CustomerPage';
import ProductPage from './Pages/ProductPage';
import SalesPage from './Pages/SalesPage';


import RegisterPage from './Pages/RegisterPage';
import Login from './Pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/OverviewPage" element={<OverviewPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/sales" element={<SalesPage/>} />
     
      <Route path="/customers" element={<CustomerPage />} />
     
      <Route path="/Register" element={<RegisterPage />} />
      
    </Routes>
    
  );
};

export default App;

