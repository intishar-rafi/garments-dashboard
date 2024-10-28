export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  export const calculateProgress = (completed: number, total: number): number => {
    return Math.round((completed / total) * 100);
  };
  
  export const getStatusColor = (status: string): string => {
    const colors = {
      'Completed': 'text-green-500',
      'In Progress': 'text-blue-500',
      'At Risk': 'text-red-500'
    };
    return colors[status as keyof typeof colors] || 'text-gray-500';
  };