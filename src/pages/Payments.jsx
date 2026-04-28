import { paymentsList } from '../utils/dummyData';

const Payments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Payments & Revenue</h1>
          <p className="text-sm text-gray-500 mt-1">Manage billing, invoices, and payment statuses.</p>
        </div>
        <button className="btn-primary">Generate Invoice</button>
      </div>

      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white border-none shadow-lg shadow-primary-500/30">
          <p className="text-primary-100 font-medium text-sm">Total Revenue (This Month)</p>
          <h2 className="text-3xl font-bold mt-2">₹1,24,500</h2>
          <div className="mt-4 flex items-center text-sm">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full flex items-center">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              12.5%
            </span>
            <span className="ml-2 text-primary-200">vs last month</span>
          </div>
        </div>

        <div className="card">
          <p className="text-gray-500 font-medium text-sm">Pending Payments</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">₹12,400</h2>
          <div className="mt-4 flex items-center text-sm">
            <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-full flex items-center font-medium">
              42 Invoices
            </span>
            <span className="ml-2 text-gray-400 cursor-pointer hover:text-primary-600 transition-colors">View Details →</span>
          </div>
        </div>

        <div className="card">
          <p className="text-gray-500 font-medium text-sm">Avg Revenue per Order</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">₹145.50</h2>
          <div className="mt-4 flex items-center text-sm">
            <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full flex items-center font-medium">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              2.1%
            </span>
            <span className="ml-2 text-gray-400">vs last month</span>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="card overflow-hidden !p-0 mt-8">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">Recent Transactions</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Filter</button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
            <thead className="bg-white text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Txn ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paymentsList.map(payment => (
                <tr key={payment.id} className="hover:bg-primary-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-semibold text-gray-900">#{payment.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{payment.customer}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4 text-gray-600">{payment.method}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                      payment.status === 'Successful' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                      payment.status === 'Pending' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                      'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
