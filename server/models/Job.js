const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: String,
  location: String,
  type: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Internship"],
    default: "Full-Time",
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//  Prevent OverwriteModelError
module.exports = mongoose.models.Job || mongoose.model("Job", JobSchema);
