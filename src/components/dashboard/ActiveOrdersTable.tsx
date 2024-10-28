import React from 'react';

import { CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';
import { Order } from '../../types/dashboard';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface ActiveOrdersTableProps {
  orders: Order[];
}

export const ActiveOrdersTable: React.FC<ActiveOrdersTableProps> = ({ orders }) => {
  const getStatusIcon = (status: Order['status']) => {
    const icons = {
      'Completed': <CheckCircle2 className="h-5 w-5 text-green-500" />,
      'In Progress': <Loader2 className="h-5 w-5 text-blue-500" />,
      'At Risk': <AlertTriangle className="h-5 w-5 text-red-500" />
    };
    return icons[status];
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Active Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Order ID</th>
                <th className="text-left p-4">Client</th>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">Progress</th>
                <th className="text-left p-4">Deadline</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.client}</td>
                  <td className="p-4">{order.product}</td>
                  <td className="p-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${(order.completed / order.quantity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1 block">
                      {order.completed} / {order.quantity}
                    </span>
                  </td>
                  <td className="p-4">{order.deadline}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2">{order.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};