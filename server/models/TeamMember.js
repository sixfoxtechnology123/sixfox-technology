const mongoose = require('mongoose');


const TeamMemberSchema = new mongoose.Schema({
name: String,
role: String,
bio: String,
avatar: String
}, { timestamps: false });


module.exports = mongoose.model('TeamMember', TeamMemberSchema);