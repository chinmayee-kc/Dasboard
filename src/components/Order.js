import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';


const data = [
  { name: '01', LastWeek: 4000, Last6Days: 2400 },
  { name: '02', LastWeek: 3000, Last6Days: 1398 },
  { name: '03', LastWeek: 2000, Last6Days: 9800 },
  { name: '04', LastWeek: 2780, Last6Days: 3908 },
  { name: '05', LastWeek: 1890, Last6Days: 4800 },
  { name: '06', LastWeek: 2390, Last6Days: 3800 },
];

const Order = () => {
  return (
    <div className="chart-container-order">
      <div className="header">
        <div className="">
          <h2 className='chat-title'>Order</h2>
          <p className="">2.568</p>
          <p className="order-change"><span className="decrease">↓ 2.1%</span> vs last week</p>
          <p className="sales-date">Sales from 1-6 Dec, 2020</p>
        </div>
        <button className="view-report-button">View Report</button>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip />
          <Legend verticalAlign="bottom" align="left" iconType="circle" />
          <Line
            type="monotone"
            dataKey="Last6Days"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="LastWeek"
            stroke="#ccc"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Order;
