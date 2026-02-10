import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const ListingCard = ({ listing }) => {
  return (
    <div className="cursor-pointer group flex flex-col gap-2 w-full">
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-200">
        <img
          src={listing.photos[0] || "https://placehold.co/600x400"}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 text-white">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'white', strokeWidth: 2, overflow: 'visible'}}><path d="M16 28c-7-4.73-14-10-14-17a6.98 6.98 0 0 1 7-7c1.8 0 3.58.68 4.95 2.05L16 9.46l2.05-2.36a6.98 6.98 0 0 1 4.95-2.05c3.86 0 7 3.14 7 7 0 7-7 12.27-14 17z"></path></svg>
        </div>
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-semibold shadow-sm">
           Guest favorite
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start mt-2">
          <h3 className="font-semibold text-gray-900 leading-tight">{listing.location}</h3>
          <div className="flex items-center gap-1 text-sm font-light">
            <FaStar size={12} className="text-black" />
            <span>{listing.rating || "New"}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm leading-tight">Hosted by {listing.hostId?.name || "Host"}</p>
        <p className="text-gray-500 text-sm leading-tight">Nov 5 - 10</p>
        <p className="mt-1 flex items-baseline gap-1">
          <span className="font-semibold text-gray-900">${listing.price}</span>
          <span className="text-gray-900 font-light">night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
