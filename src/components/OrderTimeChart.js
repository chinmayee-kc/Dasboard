import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


const data = [
  { name: 'Afternoon', value: 40, orders: 1890 },
  { name: 'Evening', value: 32, orders: 1500 },
  { name: 'Morning', value: 28, orders: 1300 },
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}%`}</p>
        <p className="intro">{`${payload[0].payload.orders} orders`}</p>
      </div>
    );
  }

  return null;
};

const OrderTimeChart = () => {
  return (
    <div className="order-time-chart-container">
        <div className='header'>
      <h2 className="chart-title">Order Time</h2>
      <button className="view-report-button ">View Report</button>
      </div>
      <p className="chart-subtitle">From 1-6 Dec, 2020</p>
      
    

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend align="center" verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    
    </div>
  );
};

export default OrderTimeChart;
