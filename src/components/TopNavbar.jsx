import { useState } from 'react';
import { notificationsList } from '../utils/dummyData';

const TopNavbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 sticky top-0">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="text"
            placeholder="Search orders, customers..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all sm:text-sm"
          />
        </div>
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="ml-4 flex items-center gap-4 relative">
        {/* Notification Bell */}
        <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-12 right-12 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-fade-in-up">
            <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-sm font-bold text-gray-900">Notifications</h3>
              <button className="text-xs text-primary-600 font-medium">Mark all as read</button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notificationsList.map(notif => (
                <div key={notif.id} className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${notif.read ? 'opacity-60' : ''}`}>
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      {notif.type === 'warning' && <span className="block w-2 h-2 rounded-full bg-amber-500 mt-1.5"></span>}
                      {notif.type === 'alert' && <span className="block w-2 h-2 rounded-full bg-red-500 mt-1.5"></span>}
                      {notif.type === 'success' && <span className="block w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></span>}
                    </div>
                    <div>
                      <p className={`text-sm ${notif.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>{notif.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 text-center border-t border-gray-50">
              <button className="text-xs text-gray-500 hover:text-primary-600 font-medium">View all notifications</button>
            </div>
          </div>
        )}

        {/* Profile Dropdown */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900 leading-tight">Rahul Sharma</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <button className="h-9 w-9 rounded-full bg-primary-100 flex items-center justify-center border border-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:bg-primary-200 transition-colors">
            <span className="text-sm font-bold text-primary-700">RS</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
