import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">trips</h1>

        <div className="border-b mb-8">
          <div className="flex gap-6">
            <button className="border-b-2 border-black pb-2 font-semibold">Upcoming</button>
            <button className="text-gray-500 pb-2 hover:text-black transition">Past</button>
            <button className="text-gray-500 pb-2 hover:text-black transition">Canceled</button>
          </div>
        </div>

        <div className="bg-gray-50 border rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No trips booked... yet!</h3>
          <p className="text-gray-500 mb-6">Time to dust off your bags and start planning your next adventure.</p>
          <button className="btn-primary">Start searching</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
