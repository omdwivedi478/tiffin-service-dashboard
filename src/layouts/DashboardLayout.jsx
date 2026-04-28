import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-brand-light overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
