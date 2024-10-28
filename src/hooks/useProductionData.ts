import { useState, useEffect } from 'react';
import { Order, ProductionData, EfficiencyData } from '../types/dashboard';
import { mockOrders, mockProductionData, mockEfficiencyData } from '../data/mockData';

export const useProductionData = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [productionData, setProductionData] = useState<ProductionData[]>([]);
  const [efficiencyData, setEfficiencyData] = useState<EfficiencyData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //API fetch
        setOrders(mockOrders);
        setProductionData(mockProductionData);
        setEfficiencyData(mockEfficiencyData);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch production data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { orders, productionData, efficiencyData, isLoading, error };
};