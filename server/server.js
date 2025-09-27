require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const connectDB = require('./config/db');


const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());


// rate limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use(limiter);


// static uploads (resumes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// connect db
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sixfox';
connectDB(MONGO_URI);


// routes
app.use('/api', require('./routes/api'));


app.get('/', (req, res) => res.send({ status: 'Sixfox API running' }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));