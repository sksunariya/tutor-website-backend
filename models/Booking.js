const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionType: { type: String, enum: ['one-on-one', 'group', 'online', 'in-person'], required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
