import { recentOrders } from '../utils/dummyData';

const getStatusBadge = (status) => {
  switch(status.toLowerCase()) {
    case 'delivered': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">Delivered</span>;
    case 'pending': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded-full border border-amber-200">Pending</span>;
    case 'cancelled': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full border border-red-200">Cancelled</span>;
    case 'preparing': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-200">Preparing</span>;
    default: 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200">{status}</span>;
  }
};

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Recent Orders</h3>
        <button className="text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
          <thead className="bg-white text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer Name</th>
              <th className="px-6 py-4">Meal Type</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentOrders.map(order => (
              <tr key={order.id} className="hover:bg-primary-50/50 transition-colors duration-150">
                <td className="px-6 py-4 font-semibold text-gray-900">#{order.id}</td>
                <td className="px-6 py-4 font-medium text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-gray-600">{order.mealType}</td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
