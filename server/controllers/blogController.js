const BlogPost = require('../models/BlogPost');


exports.list = async (req, res) => {
try {
const posts = await BlogPost.find().sort({ createdAt: -1 }).limit(20);
res.json(posts);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
};


exports.get = async (req, res) => {
try {
const post = await BlogPost.findById(req.params.id);
if (!post) return res.status(404).json({ error: 'Not found' });
res.json(post);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
};


exports.create = async (req, res) => {
try {
const { title, excerpt, content, category, author, coverImage } = req.body;
const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
const p = new BlogPost({ title, slug, excerpt, content, category, author, coverImage });
await p.save();
res.json(p);
} catch (err) {
res.status(500).json({ error: 'Server error' });
}
};