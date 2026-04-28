import { recentOrders } from '../utils/dummyData';

const getDeliveryBadge = (status) => {
  switch(status.toLowerCase()) {
    case 'delivered': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>Delivered</span>;
    case 'pending': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded-full border border-amber-200"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-1.5"></span>On The Way</span>;
    case 'cancelled': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full border border-red-200"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></span>Failed</span>;
    case 'preparing': 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-200"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>Kitchen</span>;
    default: 
      return <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200">{status}</span>;
  }
};

const Delivery = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Delivery Tracking</h1>
          <p className="text-sm text-gray-500 mt-1">Monitor real-time delivery statuses.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <input type="text" placeholder="Search Order ID..." className="pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 w-64" />
            <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <button className="btn-primary">Assign Driver</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-800">In Kitchen</p>
            <p className="text-2xl font-bold text-blue-900">45</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-amber-800">Out for Delivery</p>
            <p className="text-2xl font-bold text-amber-900">18</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-600 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-800">Delivered Today</p>
            <p className="text-2xl font-bold text-emerald-900">124</p>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
            <thead className="bg-white text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Delivery Address</th>
                <th className="px-6 py-4">Time Slot</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map(order => (
                <tr key={order.id} className="hover:bg-primary-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-semibold text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600 truncate max-w-[200px]" title={order.address}>{order.address}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4">{getDeliveryBadge(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
