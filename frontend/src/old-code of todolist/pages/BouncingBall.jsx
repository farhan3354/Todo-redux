import React from "react";
import "./BouncingBall.css"; // For keyframes

const BouncingBall = () => {
  return (
    <div className="flex items-end justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 bg-blue-500 rounded-full animate-bounce-custom"></div>
    </div>
  );
};

export default BouncingBall;
