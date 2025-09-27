const Job = require('../models/Job');


exports.apply = async (req, res) => {
try {
const { name, email, phone, position, coverLetter } = req.body;
const resumePath = req.file ? req.file.path : undefined;
if (!name || !email) return res.status(400).json({ error: 'name and email required' });


const job = new Job({ name, email, phone, position, coverLetter, resumePath });
await job.save();


res.json({ ok: true, message: 'Application submitted' });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error' });
}
};