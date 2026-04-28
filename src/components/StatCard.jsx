const StatCard = ({ title, value, trend, isPositive, icon }) => {
  return (
    <div className="card relative overflow-hidden group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-primary-50 opacity-50 group-hover:scale-150 transition-transform duration-500 ease-in-out"></div>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="p-3 bg-primary-50 rounded-lg text-primary-600 shadow-sm">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm relative z-10">
        <span className={`flex items-center font-medium px-2 py-0.5 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
          {isPositive ? (
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          ) : (
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" /></svg>
          )}
          {trend}
        </span>
        <span className="text-gray-400 ml-2 text-xs font-medium">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
