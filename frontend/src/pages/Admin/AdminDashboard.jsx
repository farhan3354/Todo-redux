import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user.token}` },
        };
        const usersRes = await axios.get(
          "http://localhost:8000/api/admin/users",
          config
        );
        const listingsRes = await axios.get(
          "http://localhost:8000/api/admin/listings",
          config
        );
        setUsers(usersRes.data);
        setListings(listingsRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    if (user && user.role === "admin") {
      fetchData();
    }
  }, [user]);

  if (!user || user.role !== "admin") {
    return (
      <div className="text-center mt-20 text-xl font-bold text-red-500">
        Access Denied. Admins Only.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500 text-sm font-semibold uppercase">Total Users</h3>
            <p className="text-3xl font-bold mt-2">{users.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500 text-sm font-semibold uppercase">Total Listings</h3>
            <p className="text-3xl font-bold mt-2">{listings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500 text-sm font-semibold uppercase">Total Revenue</h3>
            <p className="text-3xl font-bold mt-2">$0 <span className="text-sm font-normal text-gray-400">(Mock)</span></p>
          </div>
        </div>

        {/* Users Table */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow border">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((u) => (
                  <tr key={u._id}>
                    <td className="py-4 px-6 text-sm text-gray-900">{u._id}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{u.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{u.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Listings Table */}
        <div>
          <h2 className="text-xl font-bold mb-4">Listings</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow border">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {listings.map((l) => (
                  <tr key={l._id}>
                    <td className="py-4 px-6 text-sm text-gray-900">{l._id}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{l.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">{l.hostId?.name || "Unknown"}</td>
                    <td className="py-4 px-6 text-sm text-gray-900">${l.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
