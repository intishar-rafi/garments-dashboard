import { ProductionData } from '@/types/dashboard';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';


interface ProductionTimelineProps {
  data: ProductionData[];
}

const ProductionTimeline: React.FC<ProductionTimelineProps> = ({ data }) => {
  // Debugging: Log the data to verify it's being passed correctly
  console.log("ProductionTimeline data:", data);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-80">
      <h2 className="text-lg font-semibold mb-4">Production Timeline</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
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
  );
};

export default ProductionTimeline;
