import React from "react";
import {
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaMountain,
  FaSkiing,
  FaHome,
  FaTree,
  FaWater,
} from "react-icons/fa";

const categories = [
  { label: "Amazing Pools", icon: FaSwimmingPool },
  { label: "Beachfront", icon: FaUmbrellaBeach },
  { label: "Cabins", icon: FaHome },
  { label: "OMG!", icon: FaMountain },
  { label: "Skiing", icon: FaSkiing },
  { label: "National Parks", icon: FaTree },
  { label: "Lakefront", icon: FaWater },
  { label: "Tiny Homes", icon: FaHome },
  { label: "Islands", icon: FaUmbrellaBeach },
  { label: "Camping", icon: FaTree },
];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-white sticky top-[80px] z-40 pt-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 min-w-fit cursor-pointer transition duration-200 group relative ${
                selectedCategory === item.label
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => onSelectCategory(item.label)}
            >
              <item.icon size={26} className={`transition duration-200 ${selectedCategory === item.label ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`} />
              <span className={`text-xs font-medium whitespace-nowrap ${selectedCategory === item.label ? "font-semibold" : ""}`}>
                {item.label}
              </span>
              {selectedCategory === item.label && (
                 <div className="absolute bottom-[-16px] w-full h-[2px] bg-black"></div>
              )}
              {selectedCategory !== item.label && (
                   <div className="absolute bottom-[-16px] w-full h-[2px] bg-gray-200 opacity-0 group-hover:opacity-100 transition duration-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
