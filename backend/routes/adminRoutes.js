const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllListings,
  getAllBookings,
} = require("../controllers/adminController");
const { protect } = require("../middlewares/authMiddleware");

// Middleware to check if user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};

router.get("/users", protect, admin, getAllUsers);
router.get("/listings", protect, admin, getAllListings);
router.get("/bookings", protect, admin, getAllBookings);

module.exports = router;
