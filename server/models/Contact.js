const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
phone: String,
position: String,
coverLetter: String,
resumePath: String
}, { timestamps: false });


module.exports = mongoose.model('Job', JobSchema);