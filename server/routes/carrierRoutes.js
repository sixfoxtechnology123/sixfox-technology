const express = require("express");
const router = express.Router();
const {
  subscribe,
  getJobs,
  addJob,
  deleteJob,
  notifySubscribers,
} = require("../controllers/carrierController");

// Subscribe
router.post("/subscribe", subscribe);

// Get all jobs
router.get("/jobs", getJobs);

// Add job & auto notify
router.post("/addJob", addJob);

// Delete job
router.delete("/deleteJob/:id", deleteJob);

// Manual notify
router.post("/notifySubscribers", notifySubscribers);

module.exports = router;
