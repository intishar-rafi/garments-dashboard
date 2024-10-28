import React from 'react';
import { QuickStats } from './components/dashboard/QuickStats';
import  ProductionTimeline  from './components/dashboard/ProductionTimeline';
import { ActiveOrdersTable } from './components/dashboard/ActiveOrdersTable';
import { EfficiencyChart } from './components/dashboard/EfficiencyChart';
import { mockOrders, mockProductionData, mockEfficiencyData } from './data/mockData';

const App: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Production Management
        </h1>
        <p className="text-gray-600 mt-2">
          Real-time monitoring and management of garment production
        </p>
      </div>

      <QuickStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductionTimeline data={mockProductionData} />
        <EfficiencyChart data={mockEfficiencyData} />
      </div>

      <ActiveOrdersTable orders={mockOrders} />
    </div>
  );
};

export default App;