import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import HostDashboard from "./pages/Host/HostDashboard";
import UserDashboard from "./pages/User/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listings/:id" element={<div>Listing Details (Coming Soon)</div>} />
        
        {/* Dashboards */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/host/dashboard" element={<HostDashboard />} />
        <Route path="/trips" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
