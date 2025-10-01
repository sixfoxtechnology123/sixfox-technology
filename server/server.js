const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");  
const contactRoutes = require("./routes/contactRoutes"); 
const carrierRoutes = require("./routes/carrierRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

//  Connect to MongoDB
connectDB(process.env.MONGO_URI);

//  Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" })); // allow large JSON payloads (for Base64 images)

//  API Routes
app.use("/api/contact", contactRoutes);
app.use("/api/careers", carrierRoutes);
app.use("/api/projects", projectRoutes);

//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
