const express = require("express");
const router = express.Router();
const {
  getListings,
  getListingById,
  createListing,
} = require("../controllers/listingController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/", getListings);
router.get("/:id", getListingById);
router.post("/", protect, createListing);

module.exports = router;
