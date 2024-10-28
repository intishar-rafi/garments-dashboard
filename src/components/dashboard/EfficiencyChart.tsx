import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from 'recharts';

import { EfficiencyData } from '../../types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface EfficiencyChartProps {
  data: EfficiencyData[];
}

const COLORS = ['#4CAF50', '#FFA726', '#EF5350'];

export const EfficiencyChart: React.FC<EfficiencyChartProps> = ({ data }) => (
  <Card>
    <CardHeader>
      <CardTitle>Production Efficiency</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);