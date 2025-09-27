const mongoose = require('mongoose');


const ServiceSchema = new mongoose.Schema({
title: String,
short: String,
description: String,
icon: String
}, { timestamps: false });


module.exports = mongoose.model('Service', ServiceSchema);