import React from 'react';
import CustomerForm from '../components/CustomerForm';
import MainLayout from '../components/MainLayout';
import CustomerList from '../components/CustomerList';




const CustomerPage = () => {
  return (
    <MainLayout>
      <CustomerForm />
      <CustomerList />
     
    </MainLayout>
  );
};

export default CustomerPage;
