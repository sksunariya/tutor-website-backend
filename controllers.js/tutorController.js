const Tutor = require('../models/Tutor');

// Create a new tutor
exports.createTutor = async (req, res) => {
  const { name, subject, bio, availability } = req.body;
  try {
    const tutor = new Tutor({ name, subject, bio, availability });
    await tutor.save();
    res.status(201).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tutors
exports.getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single tutor by ID
exports.getTutorById = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor not found' });
    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a tutor
exports.updateTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tutor) return res.status(404).json({ message: 'Tutor not found' });
    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a tutor
exports.deleteTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findByIdAndDelete(req.params.id);
    if (!tutor) return res.status(404).json({ message: 'Tutor not found' });
    res.status(200).json({ message: 'Tutor deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
