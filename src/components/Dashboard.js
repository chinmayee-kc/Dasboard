import React from 'react';
import Rating from './Rating';
import MostOrderedFood from './MostOrderedFood';
import Chart from './Chart';
import OrderTimeChart from './OrderTimeChart';
import Order from './Order';


const Dashboard = () => {
  return (
    <>
    <h3>Dashboard</h3>
    <div className='main'>
      
      <Chart/>
      <OrderTimeChart/>
      <Rating />
      <MostOrderedFood />
      <Order/>
    </div>
    </>
  );
};

export default Dashboard;
