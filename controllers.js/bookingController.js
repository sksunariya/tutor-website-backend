const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  const { tutor, student, sessionType, date, time } = req.body;
  try {
    const booking = new Booking({ tutor, student, sessionType, date, time });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('tutor student');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('tutor student');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
