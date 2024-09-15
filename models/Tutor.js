const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  bio: { type: String },
  availability: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tutor', TutorSchema);
