const nodemailer = require("nodemailer");

exports.sendContactEmail = (req, res) => {
  const { name, email, phone, org, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, Email and Message are required." });
  }

  // Respond immediately to frontend
  res.json({ success: true, message: "Message sent — we will contact you soon!" });

  // Send email in the background
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // App Password recommended
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nOrganization: ${org || "N/A"}\nMessage:\n${message}`,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Phone:</b> ${phone || "N/A"}</p>
           <p><b>Organization:</b> ${org || "N/A"}</p>
           <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
