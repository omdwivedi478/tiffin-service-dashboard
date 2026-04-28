import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { revenueData, dailyOrdersData } from '../utils/dummyData';

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Line Chart: Orders Over Time */}
      <div className="card h-96 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">Orders Over Time</h3>
          <p className="text-sm text-gray-500">Monthly trend of received orders.</p>
        </div>
        <div className="flex-1 w-full h-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#1e293b', fontWeight: 600 }}
              />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: 500 }} />
              <Line 
                type="monotone" 
                dataKey="orders" 
                name="Total Orders"
                stroke="#f97316" 
                strokeWidth={3} 
                dot={{ r: 5, fill: '#fff', strokeWidth: 2, stroke: '#f97316' }} 
                activeDot={{ r: 7, strokeWidth: 0, fill: '#ea580c' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart: Daily Orders */}
      <div className="card h-96 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">Daily Orders Distribution</h3>
          <p className="text-sm text-gray-500">Breakdown by meal type across the week.</p>
        </div>
        <div className="flex-1 w-full h-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyOrdersData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }} 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontWeight: 600 }}
              />
              <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '14px', fontWeight: 500 }} />
              <Bar dataKey="standard" name="Standard Tiffin" fill="#f97316" radius={[4, 4, 0, 0]} maxBarSize={40} />
              <Bar dataKey="diet" name="Diet Tiffin" fill="#1e293b" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
