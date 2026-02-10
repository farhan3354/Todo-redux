const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      default: [],
    },
    type: {
      type: String,
      required: true, 
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    maxGuests: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);
