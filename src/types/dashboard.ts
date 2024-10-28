export interface Order {
    id: string;
    client: string;
    product: string;
    quantity: number;
    completed: number;
    deadline: string;
    status: 'Completed' | 'In Progress' | 'At Risk';
  }
  
  export interface ProductionData {
    name: string;
    target: number;
    actual: number;
  }
  
  export interface EfficiencyData {
    name: string;
    value: number;
  }