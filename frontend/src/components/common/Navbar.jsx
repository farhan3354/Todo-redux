import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaBars, FaGlobe } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };

  return (
    <nav className="border-b sticky top-0 bg-white z-50 h-[80px] flex items-center">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <FaGlobe className="text-3xl" />
          <span className="hidden md:block text-primary">airbnb</span>
        </Link>

        {/* Search Bar - Center */}
        <div className="hidden md:flex items-center border rounded-full py-2.5 px-4 shadow-sm hover:shadow-md transition cursor-pointer gap-4" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)'}}>
          <div className="text-sm font-semibold px-4 border-r border-gray-300">Anywhere</div>
          <div className="text-sm font-semibold px-4 border-r border-gray-300">Any week</div>
          <div className="flex items-center gap-3 pl-4">
            <div className="text-sm text-gray-500 font-normal">Add guests</div>
            <div className="bg-primary text-white p-2.5 rounded-full">
              <FaSearch size={14} />
            </div>
          </div>
        </div>

        {/* User Menu - Right */}
        <div className="flex items-center gap-2 relative">
          <div className="hidden md:block text-sm font-semibold py-2.5 px-4 rounded-full hover:bg-gray-100 cursor-pointer transition">
            Airbnb your home
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer transition">
            <FaGlobe size={18} />
          </div>
          <div
            className="flex items-center gap-3 border rounded-full p-1 pl-3 hover:shadow-md cursor-pointer transition relative ml-1"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaBars className="text-sm" />
            <div className="bg-gray-500 text-white rounded-full p-1 overflow-hidden"> 
               <FaUserCircle className="text-2xl text-gray-300 bg-gray-500" />
            </div>
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-14 right-0 w-[240px] bg-white border rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] py-2 overflow-hidden z-50">
              {user ? (
                <>
                  <Link to="/messages" className="block px-4 py-3 hover:bg-gray-50 font-semibold text-sm text-gray-700">Messages</Link>
                  <Link to="/trips" className="block px-4 py-3 hover:bg-gray-50 font-semibold text-sm text-gray-700">Trips</Link>
                  <Link to="/wishlists" className="block px-4 py-3 hover:bg-gray-50 font-semibold text-sm text-gray-700">Wishlists</Link>
                  <div className="h-[1px] bg-gray-200 my-1"></div>
                  <Link to="/host/dashboard" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700">Manage listings</Link>
                  <Link to="/account" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700">Account</Link>
                  <div className="h-[1px] bg-gray-200 my-1"></div>
                  <div onClick={handleLogout} className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">Log out</div>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-4 py-3 hover:bg-gray-50 font-semibold text-sm text-gray-800">Log in</Link>
                  <Link to="/signup" className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700">Sign up</Link>
                  <div className="h-[1px] bg-gray-200 my-1"></div>
                  <div className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">Airbnb your home</div>
                  <div className="block px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">Help Center</div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
