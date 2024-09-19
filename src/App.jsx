import React from "react";
import { Route, Routes } from "react-router-dom";


import { SideBar } from "./components";
import UserManagementScreen from "./screens/user-management-screen/UserManagementScreen";
import UserProfileScreen from "./screens/user-profile-screen/UserProfileScreen";
import MainScreen from "./screens/main-screen/MainScreen";
import EditProfileScreen from "./screens/edit-profile-screen/EditProfileScreen";
import SubscriptionScreen from "./screens/child-screens/SubscriptionScreen";
import NotificationScreen from "./screens/child-screens/NotificationScreen";
import NotificationSettingsScreen from "./screens/child-screens/NotificationSettingsScreen";
import AccountsScreen from "./screens/accounts/AccountsScreen";
import Finance from "./screens/financial-management-screen/FinancialManagement";
function App() {
  return (
    <div className="w-full h-screen text-textColor bg-primary grid place-items-end font-poppins">
      <SideBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/admin/profile" element={<EditProfileScreen />} />
        <Route path="/admin/users" element={<UserManagementScreen />} />
        <Route path="/admin/users/profile" element={<UserProfileScreen />} />
        <Route path="/admin/subscription" element={<SubscriptionScreen/>}/>
        <Route path="/admin/notification" element={<NotificationScreen/>}/>
        <Route path="/admin/notification/settings" element={<NotificationSettingsScreen/>}/>
        <Route path="/admin/notification/settings" element={<NotificationSettingsScreen/>}/>
        <Route path="/admin/accounts" element={<AccountsScreen/>}/>
        <Route path="/admin/finance" element={<Finance/>}/>
      </Routes>
    </div>
  );
}

export default App;
