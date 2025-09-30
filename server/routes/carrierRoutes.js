const express = require("express");
const router = express.Router();
const careerController = require("../controllers/carrierController");

router.post("/subscribe", careerController.subscribe);
router.get("/jobs", careerController.getJobs);
router.post("/addJob", careerController.addJob);
router.delete("/deleteJob/:id", careerController.deleteJob);
router.post("/notifySubscribers", careerController.notifySubscribers);

module.exports = router;
