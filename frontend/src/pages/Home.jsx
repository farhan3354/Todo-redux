import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../redux/slices/listingSlice";
import ListingCard from "../components/ListingCard";
import Categories from "../components/Categories";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { listings, loading, error } = useSelector((state) => state.listings);
  const [selectedCategory, setSelectedCategory] = useState("Amazing Pools");

  useEffect(() => {
    dispatch(fetchListings({ category: selectedCategory }));
  }, [dispatch, selectedCategory]);

  return (
    <>
      <Navbar />
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="container mx-auto px-4 md:px-10 lg:px-20 pt-6">
        {loading ? (
          <div className="text-center py-10 text-lg">Loading listings...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
            {listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
            {listings.length === 0 && (
              <div className="col-span-full text-center py-20 text-gray-500">
                <h3 className="text-xl font-semibold mb-2">No listings found</h3>
                <p>Try selecting a different category or adjusting your filters.</p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
