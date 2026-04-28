import DashboardCharts from '../components/DashboardCharts';
import StatCard from '../components/StatCard';
import { areaAnalytics } from '../utils/dummyData';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Analytics & Reports</h1>
          <p className="text-sm text-gray-500 mt-1">Deep dive into your business metrics and growth.</p>
        </div>
        <div className="flex gap-2">
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500">
            <option>Last 30 Days</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
          <button className="btn-primary">Download Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          title="Customer Acquisition Cost" 
          value="₹145" 
          trend="12%" 
          isPositive={false} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard 
          title="Avg Revenue Per User" 
          value="₹3,200" 
          trend="8.4%" 
          isPositive={true} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
        />
        <StatCard 
          title="Customer LTV" 
          value="₹18,500" 
          trend="4.2%" 
          isPositive={true} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
        />
        <StatCard 
          title="Refund Rate" 
          value="1.2%" 
          trend="0.3%" 
          isPositive={true} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
        />
      </div>

      <div className="mt-8">
        <DashboardCharts />
      </div>

      {/* Area-wise Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="card col-span-1 lg:col-span-2">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Orders by Area</h3>
              <p className="text-sm text-gray-500">Geographical distribution of your customer base.</p>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={areaAnalytics}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="orders"
                  nameKey="area"
                  stroke="none"
                >
                  {areaAnalytics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontWeight: 600 }}
                />
                <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ fontSize: '14px', fontWeight: 500 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card overflow-hidden !p-0">
          <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">Top Performing Areas</h3>
          </div>
          <div className="divide-y divide-gray-100 p-6">
            {areaAnalytics.sort((a,b) => b.orders - a.orders).map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${COLORS[index % COLORS.length]}20`, color: COLORS[index % COLORS.length] }}>
                    {index + 1}
                  </span>
                  <span className="font-medium text-gray-800">{item.area}</span>
                </div>
                <span className="font-bold text-gray-900">{item.orders}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
