const CarrierSubscriber = require("../models/carrierModel");
const Job = require("../models/jobModel");
const nodemailer = require("nodemailer");

// Nodemailer transporter helper
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper to send job notifications
const sendJobNotification = async (job) => {
  const subscribers = await CarrierSubscriber.find();
  if (!subscribers.length) return;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: subscribers.map((s) => s.email).join(","),
    subject: `New Career Opportunity: ${job.title} - Sixfox Technology`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <p>Dear Subscriber,</p>
        <p>We are excited to announce a new career opportunity at <strong>Sixfox Technology</strong>:</p>
        <p><strong>${job.title}</strong></p>
        <p>Click below to view more details and apply:</p>
        <p><a href="http://localhost:3000/careers" style="background-color: #FF7F50; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px;">Apply Now</a></p>
        <br/>
        <p>Best regards,<br/>
        <strong>Sixfox Technology</strong></p>
      </div>
    `,
  });
};

// ------------------ CONTROLLERS ------------------

// Subscribe user
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: "Email is required" });

    const existing = await CarrierSubscriber.findOne({ email });
    if (existing) return res.status(400).json({ success: false, message: "Already subscribed" });

    await CarrierSubscriber.create({ email });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Subscription Confirmed - Careers Updates",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <p>🎉 <strong>Thank you for subscribing!</strong></p>
          <p>You will be notified whenever new job roles are added.</p>
          <br/>
          <p>Best regards,<br/>
          <span style="font-weight: bold;">Sixfox Technology</span></p>
        </div>
      `,
    });

    res.json({ success: true, message: "Subscribed successfully! Confirmation email sent." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ success: true, jobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Add new job & notify subscribers
exports.addJob = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      return res.status(400).json({ success: false, message: "Title & Description required" });

    const job = await Job.create({ title, description });

    // Send notification
    await sendJobNotification(job);

    res.json({ success: true, message: "Job added and subscribers notified!", job });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Manual notify subscribers
exports.notifySubscribers = async (req, res) => {
  try {
    const { jobId } = req.body;
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ success: false, message: "Job not found" });

    await sendJobNotification(job);

    res.json({ success: true, message: "Subscribers notified successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
