import express from "express";
const router = express.Router();
import {
  getListings,
  getListingById,
  createListing,
} from "../controllers/listingController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.get("/", getListings);
router.get("/:id", getListingById);
router.post("/", protect, createListing);

export default router;
