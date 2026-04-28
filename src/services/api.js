// Mock API service for demonstration purposes
export const getDashboardStats = async () => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalOrders: 145,
        activeCustomers: 89,
        revenue: '₹12,450',
        pendingDeliveries: 24,
      });
    }, 500);
  });
};
