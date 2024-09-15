const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  fileUrl: { type: String }, 
  videoUrl: { type: String }, 
  type: { type: String, enum: ['file', 'video', 'webinar'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', ResourceSchema);
