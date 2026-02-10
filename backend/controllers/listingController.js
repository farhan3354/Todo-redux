const Listing = require("../models/Listing");

// @desc    Get all listings
// @route   GET /api/listings
// @access  Public
exports.getListings = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    if (category) {
      query.type = category;
    }

    if (search) {
      query.location = { $regex: search, $options: "i" };
    }

    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get single listing
// @route   GET /api/listings/:id
// @access  Public
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate(
      "hostId",
      "name email profilePic"
    );

    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a listing
// @route   POST /api/listings
// @access  Private
exports.createListing = async (req, res) => {
  try {
    const listing = new Listing({
      hostId: req.user._id,
      ...req.body,
    });

    const createdListing = await listing.save();
    res.status(201).json(createdListing);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
