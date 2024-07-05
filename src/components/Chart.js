import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


const data = [
  { name: '01', lastWeek: 3000, last6Days: 6400 },
  { name: '02', lastWeek: 6000, last6Days: 4398 },
  { name: '03', lastWeek: 2000, last6Days: 5800 },
  { name: '04', lastWeek: 2780, last6Days: 3908 },
  { name: '05', lastWeek: 1890, last6Days: 4800 },
  { name: '06', lastWeek: 2390, last6Days: 7800 },
  { name: '07', lastWeek: 3490, last6Days: 4300 },
  { name: '08', lastWeek: 3490, last6Days: 4300 },
  { name: '09', lastWeek: 3490, last6Days: 4300 },
  { name: '10', lastWeek: 3490, last6Days: 4300 },
  { name: '11', lastWeek: 3490, last6Days: 4300 },
  { name: '12', lastWeek: 3490, last6Days: 4300 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <div className=' header'>
      <h2 className="chart-title">Revenue</h2>
      <button className="view-report-button ">View Report</button>
      </div>
      <div className="chart-stats">
        <p>IDR 7.852.000</p>
        <p className="positive">▲ 2.1% vs last week</p>
      </div>
      <p className="chart-subtitle">Sales from 1-12 Dec, 2020</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tick={false} /> 
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Bar dataKey="last6Days" fill="#8884d8" barSize={20} />
          <Bar dataKey="lastWeek" fill="#82ca9d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;



