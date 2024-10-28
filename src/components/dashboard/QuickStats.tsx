import React from 'react';
import { DashboardCard } from './DashboardCard';
import { Package, Users, TrendingUp, Clock } from 'lucide-react';

export const QuickStats: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <DashboardCard
      icon={Package}
      title="Active Orders"
      value={12}
      color="text-blue-500"
    />
    <DashboardCard
      icon={Users}
      title="Workers Present"
      value={245}
      color="text-green-500"
    />
    <DashboardCard
      icon={TrendingUp}
      title="Efficiency Rate"
      value="92%"
      color="text-purple-500"
    />
    <DashboardCard
      icon={Clock}
      title="On-Time Delivery"
      value="95%"
      color="text-orange-500"
    />
  </div>
);