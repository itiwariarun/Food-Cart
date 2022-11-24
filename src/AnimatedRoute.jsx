import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import DashboardPage from "./Components/DashboardPage";
import Seller from "./Components/SellerTable";
import ManageUser from "./Components/ManageUser";
import User from "./Components/UserTable";
import OrderSummary from "./Components/OrderSummary";
import Promotion from "./Components/Promotion";
import ProfileHome from "./Components/ProfileHome";
import SellerProfile from "./Components/SellerProfile";
import UserProfile from "./Components/UserProfile";
import Report from "./Components/Report";
import Password from "./Components/Password";
import Account from "./Components/Account/Account";
import EditAdmin from "./Components/Account/EditAdmin";
import Menu from "./Components/Menu";
import Dishes from "./Components/SubMenu";
import AdminNotification from "./Components/AdminNotification";
function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/sellerprofile" element={<SellerProfile />} />
        <Route path="/cuisines" element={<Menu />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/user" element={<User />} />
        <Route path="/verifyuser" element={<ManageUser />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/report" element={<Report />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/password" element={<Password />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editadmin" element={<EditAdmin />} />
        <Route path="/notification" element={<AdminNotification />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
