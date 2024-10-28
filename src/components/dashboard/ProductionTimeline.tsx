import { useState} from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const ProductionTimeline = () => {
  // Sample production data for the last 4 weeks
  const [productionData] = useState([
    { name: 'Week 1', target: 2000, actual: 1800 },
    { name: 'Week 2', target: 2000, actual: 1900 },
    { name: 'Week 3', target: 2000, actual: 2100 },
    { name: 'Week 4', target: 2000, actual: 2200 }
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Production Timeline</h2>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={productionData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey="name" 
              stroke="#4b5563"
              tick={{ fill: '#4b5563' }}
            />
            <YAxis 
              stroke="#4b5563"
              tick={{ fill: '#4b5563' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px'
              }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
              name="Target Production"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ stroke: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
              name="Actual Production"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductionTimeline;