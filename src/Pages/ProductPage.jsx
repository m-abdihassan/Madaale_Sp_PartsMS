import React from 'react';
import MainLayout from '../components/MainLayout';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


// const ProductPage = () => {
//   return (
//     <MainLayout>
//       <ProductForm />
//       <ProductList/>
//     </MainLayout>
//   );
// };

// export default ProductPage;


const ProductPage = () => {
  return (
    <MainLayout>
         <ProductForm />
       <ProductList/>
       </MainLayout>
  )
}

export default ProductPage
