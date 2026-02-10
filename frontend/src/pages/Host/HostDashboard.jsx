import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const HostDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Host Dashboard</h1>
          <button className="btn-primary">Create New Listing</button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-bold mb-4">Your Reservations</h2>
            <div className="text-gray-500 text-center py-10">
              No upcoming reservations.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-bold mb-4">Your Listings</h2>
            <div className="text-gray-500 text-center py-10">
              You haven't posted any listings yet.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HostDashboard;
