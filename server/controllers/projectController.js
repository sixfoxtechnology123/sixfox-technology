const Project = require("../models/Project");

// Create Project
exports.createProject = async (req, res) => {
  try {
    const { name, problem, solution, outcome } = req.body;

    const images = req.files.map((file) => file.buffer.toString("base64"));

    const project = new Project({ name, problem, solution, outcome, images });
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
