import { weeklyMealPlan } from '../utils/dummyData';

const MealPlanner = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Weekly Meal Planner</h1>
          <p className="text-sm text-gray-500 mt-1">Design and schedule your daily tiffin menus.</p>
        </div>
        <button className="btn-primary">Publish Menu</button>
      </div>

      <div className="card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
            <thead className="bg-gray-50/80 text-gray-700 text-xs uppercase font-bold tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-1/6 border-r border-gray-100">Day</th>
                <th className="px-6 py-4 w-1/4 border-r border-gray-100">Breakfast</th>
                <th className="px-6 py-4 w-1/4 border-r border-gray-100">Lunch</th>
                <th className="px-6 py-4 w-1/4">Dinner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {weeklyMealPlan.map((dayPlan, index) => (
                <tr key={index} className="hover:bg-primary-50/20 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900 bg-gray-50/30 border-r border-gray-100">{dayPlan.day}</td>
                  
                  <td className="px-6 py-5 border-r border-gray-100 group relative">
                    <div className="p-2 border border-transparent rounded-lg group-hover:border-primary-200 group-hover:bg-primary-50/50 cursor-pointer transition-colors">
                      <span className="font-medium text-gray-700 block">{dayPlan.breakfast}</span>
                      <span className="text-[10px] text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bottom-4">Edit</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 border-r border-gray-100 group relative">
                    <div className="p-2 border border-transparent rounded-lg group-hover:border-primary-200 group-hover:bg-primary-50/50 cursor-pointer transition-colors">
                      <span className="font-medium text-gray-700 block">{dayPlan.lunch}</span>
                      <span className="text-[10px] text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bottom-4">Edit</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 group relative">
                    <div className="p-2 border border-transparent rounded-lg group-hover:border-primary-200 group-hover:bg-primary-50/50 cursor-pointer transition-colors">
                      <span className="font-medium text-gray-700 block">{dayPlan.dinner}</span>
                      <span className="text-[10px] text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bottom-4">Edit</span>
                    </div>
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

export default MealPlanner;
