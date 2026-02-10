const User = require("../models/User");
const Listing = require("../models/Listing");
const Booking = require("../models/Booking");

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get all listings
// @route   GET /api/admin/listings
// @access  Private/Admin
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({}).populate("hostId", "name email");
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("guestId", "name email")
      .populate("listingId", "title");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
