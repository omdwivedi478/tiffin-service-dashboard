import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Subscriptions from './pages/Subscriptions';
import MealPlanner from './pages/MealPlanner';
import Delivery from './pages/Delivery';
import Customers from './pages/Customers';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Feedback from './pages/Feedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="meal-planner" element={<MealPlanner />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payments" element={<Payments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
