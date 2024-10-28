import React from 'react';

import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  color: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  icon: Icon,
  title,
  value,
  color
}) => (
  <Card>
    <CardContent className="flex items-center p-6">
      <Icon className={`h-8 w-8 ${color} mr-4`} />
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </CardContent>
  </Card>
);