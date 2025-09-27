const mongoose = require('mongoose');


const BlogPostSchema = new mongoose.Schema({
title: { type: String, required: true },
slug: { type: String, index: true },
excerpt: String,
content: String,
category: String,
author: String,
coverImage: String
}, { timestamps: false });


module.exports = mongoose.model('BlogPost', BlogPostSchema);