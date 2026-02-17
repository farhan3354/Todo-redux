import Listing from "../models/Listing.js";

export const getListings = async (req, res) => {
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
    return res.json(listings);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getListingById = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate(
      "hostId",
      "name email profilePic",
    );

    if (listing) {
      return res.json(listing);
    } else {
      return res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const createListing = async (req, res) => {
  try {
    const { title, description, type, location, price, maxGuests } = req.body;
    if (!title || !description || !location || !price || !maxGuests) {
      return res.status(404).json({ message: "All the feilds are requireds" });
    }
    const userId = req.params.id;
    const rating = 0;
    const listing = Listing.create({
      userId,
      title,
      description,
      type,
      location,
      price,
      maxGuests,
      rating,
    });

    const createdListing = await listing.save();
    return res.status(201).json(createdListing);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
