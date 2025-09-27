const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


// Controllers
const contactController = require('../controllers/contactController');
const careersController = require('../controllers/careersController');
const blogController = require('../controllers/blogController');


// Models (simple CRUD endpoints)
const Service = require('../models/Service');
const Project = require('../models/Project');
const TeamMember = require('../models/TeamMember');


// Multer setup for resume upload
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, path.join(__dirname, '..', 'uploads'));
},
filename: function (req, file, cb) {
const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
cb(null, unique + '-' + file.originalname);
}
});
const upload = multer({ storage });


// Health
router.get('/health', (req, res) => res.json({ ok: true, time: new Date() }));


// CONTACT
router.post('/contact', contactController.createContact);


// CAREERS (file upload field name: resume)
router.post('/careers', upload.single('resume'), careersController.apply);


// BLOG
router.get('/blog', blogController.list);
router.get('/blog/:id', blogController.get);
router.post('/blog', blogController.create);


// SERVICES
router.get('/services', async (req, res) => {
const services = await Service.find().sort({ createdAt: -1 });
res.json(services);
});
router.post('/services', async (req, res) => {
try { const s = new Service(req.body); await s.save(); res.json(s); } catch(e){ res.status(400).json({error:e.message}); }
});


// PROJECTS
router.get('/projects', async (req, res) => { const list = await Project.find().sort({ createdAt: -1 }); res.json(list); });
router.post('/projects', async (req, res) => { try{ const p = new Project(req.body); await p.save(); res.json(p);}catch(e){res.status(400).json({error:e.message})}});


// TEAM
router.get('/team', async (req, res) => { const t = await TeamMember.find().sort({ createdAt: -1 }); res.json(t); });
router.post('/team', async (req, res) => { try{ const m = new TeamMember(req.body); await m.save(); res.json(m);}catch(e){res.status(400).json({error:e.message})}});


module.exports = router;