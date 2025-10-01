const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  outcome: { type: String, required: true },
  images: { type: [String], default: [] }, // Base64 strings
}, { timestamps: false });

module.exports = mongoose.model("Project", projectSchema);
