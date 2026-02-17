import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getAllListings,
  getAllBookings,
} from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddleware.js";

// Middleware to check if user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin" });
  }
};

router.get("/users", protect, admin, getAllUsers);
router.get("/us", getAllUsers);
router.get("/listings", protect, admin, getAllListings);
router.get("/bookings", protect, admin, getAllBookings);

export default router;
