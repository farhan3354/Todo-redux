import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[80vh] bg-white">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
          <h2 className="text-lg font-bold mb-6 text-center text-gray-800 border-b pb-4">
             Sign up
          </h2>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Create your profile</h3>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-0">
             <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-t-lg p-4 pt-6 outline-none focus:border-black focus:ring-1 focus:ring-black peer transition"
                placeholder=" "
                required
              />
              <label className="absolute text-gray-500 text-sm top-4 left-4 scale-75 origin-[0] -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all pointer-events-none">Name</label>
            </div>

            <div className="relative -mt-[1px]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-400 p-4 pt-6 outline-none focus:border-black focus:ring-1 focus:ring-black peer transition focus:z-10 relative"
                placeholder=" "
                required
              />
              <label className="absolute text-gray-500 text-sm top-4 left-4 scale-75 origin-[0] -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all pointer-events-none z-20">Email</label>
            </div>

            <div className="relative -mt-[1px]">
               <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-400 p-4 pt-6 outline-none focus:border-black focus:ring-1 focus:ring-black peer transition focus:z-10 relative"
                placeholder=" "
                required
              />
              <label className="absolute text-gray-500 text-sm top-4 left-4 scale-75 origin-[0] -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all pointer-events-none z-20">Phone Number</label>
            </div>

            <div className="relative -mt-[1px]">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-b-lg border-t-0 p-4 pt-6 outline-none focus:border-black focus:ring-1 focus:ring-black peer transition"
                placeholder=" "
                required
              />
              <label className="absolute text-gray-500 text-sm top-4 left-4 scale-75 origin-[0] -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all pointer-events-none">Password</label>
            </div>

            <p className="text-xs text-gray-500 my-4">
              By selecting <strong>Agree and continue</strong>, I agree to Airbnb's <span className="underline cursor-pointer text-blue-600">Terms of Service</span>, <span className="underline cursor-pointer text-blue-600">Payments Terms of Service</span>, and <span className="underline cursor-pointer text-blue-600">Nondiscrimination Policy</span> and acknowledge the <span className="underline cursor-pointer text-blue-600">Privacy Policy</span>.
            </p>

            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Agree and continue"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-800 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
