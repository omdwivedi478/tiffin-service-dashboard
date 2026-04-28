export const statCardsData = [
  { title: "Total Orders", value: "1,248", trend: "12%", isPositive: true },
  { title: "Active Customers", value: "342", trend: "4%", isPositive: true },
  { title: "Monthly Revenue", value: "₹45,200", trend: "8%", isPositive: true },
  { title: "Meals Delivered", value: "8,924", trend: "2%", isPositive: false },
];

export const recentOrders = [
  { id: "1024", customer: "Rahul Sharma", mealType: "Standard Tiffin", date: "Today, 12:30 PM", status: "Delivered", address: "123 Indiranagar, 1st Stage" },
  { id: "1025", customer: "Priya Singh", mealType: "Diet Tiffin", date: "Today, 12:45 PM", status: "Delivered", address: "45 Koramangala, 4th Block" },
  { id: "1026", customer: "Amit Patel", mealType: "Premium Thali", date: "Today, 1:15 PM", status: "Preparing", address: "78 HSR Layout, Sector 2" },
  { id: "1027", customer: "Neha Gupta", mealType: "Standard Tiffin", date: "Today, 1:30 PM", status: "Pending", address: "Tech Park, Whitefield" },
  { id: "1028", customer: "Vikram Reddy", mealType: "Diet Tiffin", date: "Yesterday, 8:00 PM", status: "Cancelled", address: "BTM Layout, 2nd Stage" },
];

export const revenueData = [
  { month: 'Jan', orders: 400, revenue: 15000 },
  { month: 'Feb', orders: 300, revenue: 12000 },
  { month: 'Mar', orders: 550, revenue: 21000 },
  { month: 'Apr', orders: 480, revenue: 18500 },
  { month: 'May', orders: 700, revenue: 28000 },
  { month: 'Jun', orders: 620, revenue: 25000 },
];

export const dailyOrdersData = [
  { day: 'Mon', standard: 45, diet: 20 },
  { day: 'Tue', standard: 52, diet: 24 },
  { day: 'Wed', standard: 48, diet: 22 },
  { day: 'Thu', standard: 60, diet: 28 },
  { day: 'Fri', standard: 55, diet: 25 },
  { day: 'Sat', standard: 30, diet: 10 },
  { day: 'Sun', standard: 20, diet: 8 },
];

export const subscriptionPlans = [
  { id: 1, name: "Basic Tiffin", price: "₹2,500/mo", meals: "1 Meal/Day", features: ["Standard Menu", "Monday-Saturday", "No Customization"] },
  { id: 2, name: "Standard Tiffin", price: "₹4,500/mo", meals: "2 Meals/Day", features: ["Standard Menu", "Monday-Saturday", "Weekend Options"] },
  { id: 3, name: "Premium Diet", price: "₹6,000/mo", meals: "2 Meals/Day", features: ["Diet Menu", "All Days", "Fully Customizable"] },
];

export const activeSubscriptions = [
  { id: "S101", customer: "Arjun Mehta", plan: "Standard Tiffin", startDate: "01 May 2026", status: "Active", payment: "Paid", autoRenew: true },
  { id: "S102", customer: "Kavya Iyer", plan: "Premium Diet", startDate: "15 Apr 2026", status: "Active", payment: "Paid", autoRenew: true },
  { id: "S103", customer: "Rohan Das", plan: "Basic Tiffin", startDate: "10 May 2026", status: "Expiring Soon", payment: "Pending", autoRenew: false },
  { id: "S104", customer: "Sneha Kapoor", plan: "Standard Tiffin", startDate: "20 May 2026", status: "Active", payment: "Paid", autoRenew: true },
];

export const weeklyMealPlan = [
  { day: "Monday", breakfast: "Poha & Jalebi", lunch: "Rajma Chawal, Roti, Salad", dinner: "Dal Tadka, Mix Veg, Roti" },
  { day: "Tuesday", breakfast: "Idli Sambar", lunch: "Paneer Bhurji, Dal, Roti", dinner: "Kadhi Pakora, Rice, Roti" },
  { day: "Wednesday", breakfast: "Aloo Paratha", lunch: "Chole Bhature, Lassi", dinner: "Bhindi Masala, Dal, Roti" },
  { day: "Thursday", breakfast: "Upma", lunch: "Veg Pulao, Raita, Papad", dinner: "Palak Paneer, Roti" },
  { day: "Friday", breakfast: "Methi Thepla", lunch: "Dal Makhani, Jeera Rice, Roti", dinner: "Aloo Gobi, Dal, Roti" },
  { day: "Saturday", breakfast: "Masala Dosa", lunch: "Special Thali", dinner: "Khichdi & Kadhi" },
];

export const customerList = [
  { id: "C001", name: "Rahul Sharma", phone: "+91 9876543210", address: "Indiranagar", joinDate: "Jan 2025", lifetimeValue: "₹45,000" },
  { id: "C002", name: "Priya Singh", phone: "+91 8765432109", address: "Koramangala", joinDate: "Mar 2025", lifetimeValue: "₹38,500" },
  { id: "C003", name: "Amit Patel", phone: "+91 7654321098", address: "HSR Layout", joinDate: "Jun 2025", lifetimeValue: "₹24,000" },
  { id: "C004", name: "Neha Gupta", phone: "+91 6543210987", address: "Whitefield", joinDate: "Aug 2025", lifetimeValue: "₹18,000" },
  { id: "C005", name: "Vikram Reddy", phone: "+91 5432109876", address: "BTM Layout", joinDate: "Oct 2025", lifetimeValue: "₹12,500" },
];

export const paymentsList = [
  { id: "P501", customer: "Arjun Mehta", amount: "₹4,500", date: "01 May 2026", method: "UPI", status: "Successful" },
  { id: "P502", customer: "Kavya Iyer", amount: "₹6,000", date: "15 Apr 2026", method: "Credit Card", status: "Successful" },
  { id: "P503", customer: "Rohan Das", amount: "₹2,500", date: "10 May 2026", method: "Net Banking", status: "Pending" },
  { id: "P504", customer: "Sneha Kapoor", amount: "₹4,500", date: "20 May 2026", method: "UPI", status: "Successful" },
  { id: "P505", customer: "Amit Patel", amount: "₹6,000", date: "25 May 2026", method: "Cash", status: "Failed" },
];

export const usersList = [
  { id: "U001", name: "Rahul Sharma", role: "Admin", plan: "N/A", status: "Active", email: "rahul@tiffinflow.com" },
  { id: "U002", name: "Priya Singh", role: "Customer", plan: "Standard Tiffin", status: "Active", email: "priya@example.com" },
  { id: "U003", name: "Amit Patel", role: "Customer", plan: "Premium Diet", status: "Active", email: "amit@example.com" },
  { id: "U004", name: "Neha Gupta", role: "Customer", plan: "Basic Tiffin", status: "Inactive", email: "neha@example.com" },
  { id: "U005", name: "Staff Member", role: "Manager", plan: "N/A", status: "Active", email: "staff@tiffinflow.com" },
];

export const feedbackList = [
  { id: 1, customer: "Rahul Sharma", meal: "Rajma Chawal", rating: 5, comment: "Delicious as always! Perfect spice level.", date: "Today" },
  { id: 2, customer: "Amit Patel", meal: "Diet Thali", rating: 4, comment: "Good, but could use slightly less salt.", date: "Yesterday" },
  { id: 3, customer: "Neha Gupta", meal: "Paneer Butter Masala", rating: 5, comment: "Perfect balance of spices. Loved it.", date: "26 Apr" },
  { id: 4, customer: "Vikram Reddy", meal: "Dal Makhani", rating: 3, comment: "Dal was a bit too thick today.", date: "25 Apr" },
  { id: 5, customer: "Kavya Iyer", meal: "Poha & Jalebi", rating: 5, comment: "Breakfast was very fresh and tasty.", date: "24 Apr" },
];

export const areaAnalytics = [
  { area: "Indiranagar", orders: 450 },
  { area: "Koramangala", orders: 380 },
  { area: "HSR Layout", orders: 520 },
  { area: "Whitefield", orders: 310 },
  { area: "BTM Layout", orders: 290 },
];

export const notificationsList = [
  { id: 1, type: "warning", message: "Rohan Das's subscription expires in 2 days.", time: "2 hours ago", read: false },
  { id: 2, type: "alert", message: "Payment pending for Amit Patel (₹6,000).", time: "5 hours ago", read: false },
  { id: 3, type: "success", message: "New customer signed up for Premium Diet.", time: "1 day ago", read: true },
];
