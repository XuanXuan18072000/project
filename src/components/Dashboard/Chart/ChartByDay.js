import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid,AreaChart,Tooltip,Area,Scatter} from 'recharts';
  
  
const ChartByDay = () => {
  
// Sample data
const data = [
  {
    "name": "1",
    "uv": 2800,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "",
    "uv": 4200,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "13",
    "uv": 4200,
    "pv": 1398,
    "amt": 2210
  },
  
  {
    "name": "",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "19",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  
  {
    "name": "31",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
]

  
  
return (
  <AreaChart width={1000} height={420} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#5185F7" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#E7EFFF" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Area type="monotone" dataKey="uv" stroke="#E7EFFF" fillOpacity={1} fill="url(#colorUv)" />
  </AreaChart>
);
}
export default ChartByDay;