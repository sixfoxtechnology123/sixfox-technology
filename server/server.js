const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");  // Import your db file
const contactRoutes = require("./routes/contactRoutes"); // Your controller routes
const carrierRoutes = require("./routes/carrierRoutes");

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);
app.use("/api/careers", carrierRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
