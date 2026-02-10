const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Listing = require("./models/Listing");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

dotenv.config();

const sampleListings = [
  {
    title: "Luxury Villa with Pool",
    description: "Enjoy a relaxing stay in this beautiful villa with a private pool.",
    photos: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"],
    type: "Amazing Pools",
    location: "Bali, Indonesia",
    price: 250,
    amenities: ["Pool", "WiFi", "Kitchen", "AC"],
    maxGuests: 6,
    rating: 4.8,
  },
  {
    title: "Cozy Mountain Cabin",
    description: "A perfect getaway in the mountains. Great for skiing and hiking.",
    photos: ["https://images.unsplash.com/photo-1518732656745-d41c4f757497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"],
    type: "Cabins",
    location: "Aspen, USA",
    price: 180,
    amenities: ["Fireplace", "WiFi", "Heating"],
    maxGuests: 4,
    rating: 4.9,
  },
  {
    title: "Beachfront Paradise",
    description: "Wake up to the sound of waves. Direct beach access.",
    photos: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"],
    type: "Beachfront",
    location: "Maldives",
    price: 500,
    amenities: ["Beach Access", "WiFi", "Breakfast"],
    maxGuests: 2,
    rating: 5.0,
  },
  {
    title: "Modern Apartment in City Center",
    description: "Close to all major attractions and public transport.",
    photos: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"],
    type: "OMG!",
    location: "New York, USA",
    price: 300,
    amenities: ["WiFi", "Gym", "Elevator"],
    maxGuests: 3,
    rating: 4.7,
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Listing.deleteMany();
    await User.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    const host = await User.create({
      name: "John Doe",
      email: "host@example.com",
      password: hashedPassword,
      role: "host",
    });

    const listingsWithHost = sampleListings.map((listing) => ({
      ...listing,
      hostId: host._id,
    }));

    await Listing.insertMany(listingsWithHost);

    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
