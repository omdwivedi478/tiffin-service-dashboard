import { subscriptionPlans, activeSubscriptions } from '../utils/dummyData';

const Subscriptions = () => {
  // Separate into expiring and active
  const expiringSubs = activeSubscriptions.filter(s => s.status === 'Expiring Soon');
  const otherSubs = activeSubscriptions.filter(s => s.status !== 'Expiring Soon');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Subscription System</h1>
          <p className="text-sm text-gray-500 mt-1">Manage plans, renewals, and subscriber accounts.</p>
        </div>
        <button className="btn-primary">Create New Plan</button>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map(plan => (
          <div key={plan.id} className="card flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary-600 mt-4">{plan.price}</p>
              <p className="text-sm font-medium text-gray-500 mt-1">{plan.meals}</p>
              
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full mt-8 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium">Edit Plan</button>
          </div>
        ))}
      </div>

      {/* Expiring Subscriptions Alert Section */}
      {expiringSubs.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <h3 className="text-lg font-bold text-amber-900">Expiring Soon ({expiringSubs.length})</h3>
          </div>
          <div className="space-y-3">
            {expiringSubs.map(sub => (
              <div key={sub.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    {sub.customer.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{sub.customer}</p>
                    <p className="text-xs text-gray-500">{sub.plan} • Expires on {sub.startDate}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors">
                  Send Reminder
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Subscriptions Table */}
      <div className="card overflow-hidden !p-0">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">All Subscriptions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
            <thead className="bg-white text-gray-500 text-xs uppercase font-bold tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Customer Name</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Auto-Renew</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {activeSubscriptions.map(sub => (
                <tr key={sub.id} className="hover:bg-primary-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-semibold text-gray-900">{sub.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{sub.plan}</td>
                  <td className="px-6 py-4 text-gray-500">{sub.startDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                      sub.status === 'Active' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-amber-100 text-amber-800 border-amber-200'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={sub.autoRenew} />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">Manage</button>
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

export default Subscriptions;
