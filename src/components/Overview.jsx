// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Overview.css';

// const Overview = () => {
//   const [overviewData, setOverviewData] = useState({
//     totalCustomers: 0,
//     totalProducts: 0,
//     totalSales: 0,
//     totalOrders: 0,
//   });

//   useEffect(() => {
//     const fetchOverviewData = async () => {
//       try {
//         const response = await axios.get('/api/overview');
//         setOverviewData(response.data);
//       } catch (error) {
//         console.error('Error fetching overview data', error);
//       }
//     };

//     fetchOverviewData();
//   }, []);

//   return (
//     <div className="overview-page">
//       <h1>Overview</h1>
//       <div className="overview-section">
//         <div className="overview-card">
//           <h2>Customers</h2>
//           <p>{overviewData.totalCustomers}</p>
//         </div>
//         <div className="overview-card">
//           <h2>Products</h2>
//           <p>{overviewData.totalProducts}</p>
//         </div>
//         <div className="overview-card">
//           <h2>Sales</h2>
//           <p>{overviewData.totalSales}</p>
//         </div>
//         <div className="overview-card">
//           <h2>Orders</h2>
//           <p>{overviewData.totalOrders}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Overview.css';

const Overview = () => {
  const [overviewData, setOverviewData] = useState({
    totalCustomers: 0,
    totalProducts: 0,
    totalSales: 0,
    
  });

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/overview');
        setOverviewData(response.data);
      } catch (error) {
        console.error('Error fetching overview data', error);
      }
    };

    fetchOverviewData();
  }, []);

  return (
    <div className="overview-page">
      <h1>Overview</h1>
      <div className="overview-section">
        <div className="overview-card">
          <h2>Customers</h2>
          <p>{overviewData.totalCustomers}</p>
        </div>
        <div className="overview-card">
          <h2>Products</h2>
          <p>{overviewData.totalProducts}</p>
        </div>
        <div className="overview-card">
          <h2>Sales</h2>
          <p>{overviewData.totalSales}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Overview;
