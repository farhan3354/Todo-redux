import User from "../models/User.js";
import Listing from "../models/Listing.js";
import Booking from "../models/Booking.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    if (!users) {
      return res.status(404).json({ message: "NO users in the database" });
    }
    return res
      .status(200)
      .json({ users, message: "User are these in the database" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({}).populate("hostId", "name email");
    if (!listings) {
      return res.status(404).json({ message: "NO listings in the database" });
    }
    return res.json(listings);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("guestId", "name email")
      .populate("listingId", "title");
    return res.json(bookings);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
