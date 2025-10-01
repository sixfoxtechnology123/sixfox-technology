const express = require("express");
const router = express.Router();
const multer = require("multer");
const projectController = require("../controllers/projectController");

// Store files in memory to save directly to DB as Base64
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/", upload.array("images", 10), projectController.createProject);
router.get("/", projectController.getProjects);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
