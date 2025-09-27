const Contact = require('../models/Contact');


exports.createContact = async (req, res) => {
try {
const { name, email, phone, organization, message } = req.body;
if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message required' });


const c = new Contact({ name, email, phone, organization, message });
await c.save();


// TODO: send notification email using nodemailer if SMTP configured


res.json({ ok: true, message: 'Message received' });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error' });
}
};