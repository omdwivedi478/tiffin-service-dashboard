const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-sm text-gray-500 mt-1">Manage and track your customer orders.</p>
        </div>
      </div>
      
      <div className="card">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Orders module is under construction</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">This page will contain a detailed data table with filters, pagination, and order status updates.</p>
          <button className="btn-primary mt-6">Go back to Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
