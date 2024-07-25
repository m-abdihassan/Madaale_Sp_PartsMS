import React from 'react';
import MainLayout from '../components/MainLayout';
import SalesLis from '../components/SalesList';
import SalesForm from '../components/SalesForm';

const SalesPage = () => {
  return (
    <MainLayout>
      <SalesForm/>
      <SalesLis/>
    </MainLayout>
  );
};

export default SalesPage;
