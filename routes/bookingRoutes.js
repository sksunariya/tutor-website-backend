const express = require('express');
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');
const auth = require('../middlewares/auth');
const router = express.Router();

// Authenticated routes for creating bookings
router.post('/', auth, createBooking);
router.put('/:id', auth, updateBooking);
router.delete('/:id', auth, deleteBooking);

// Routes for viewing bookings
router.get('/', auth, getBookings);
router.get('/:id', auth, getBookingById);

module.exports = router;
