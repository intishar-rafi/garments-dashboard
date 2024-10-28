import { Order, ProductionData, EfficiencyData } from '../types/dashboard';

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    client: 'Fashion Corp',
    product: 'T-Shirts',
    quantity: 5000,
    completed: 2500,
    deadline: '2024-11-15',
    status: 'In Progress'
  },
  { id: 'ORD002', 
    client: 'Style Inc',
    product: 'Jeans', 
    quantity: 3000, completed: 3000,
    deadline: '2024-11-01',
    status: 'Completed'
   },
    { id: 'ORD003',
      client: 'Trendy Wear',
      product: 'Dresses', 
      quantity: 2000, 
      completed: 500, 
      deadline: '2024-11-30',
      status: 'At Risk' },
  
];

export const mockProductionData: ProductionData[] = [
  { name: 'Week 1', target: 2000, actual: 1800 },
  // ... other production data
];

export const mockEfficiencyData: EfficiencyData[] = [
  { name: 'Productive', value: 75 },
  { name: 'Downtime', value: 15 },
  { name: 'Maintenance', value: 10 }
];