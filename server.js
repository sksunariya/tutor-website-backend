const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tutors', require('./routes/tutorRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));  // Add resource routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
