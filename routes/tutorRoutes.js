const express = require('express');
const {
  createTutor,
  getTutors,
  getTutorById,
  updateTutor,
  deleteTutor
} = require('../controllers/tutorController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const router = express.Router();

// Admin routes for managing tutors
router.post('/', auth, admin, createTutor);
router.put('/:id', auth, admin, updateTutor);
router.delete('/:id', auth, admin, deleteTutor);

// Public routes for viewing tutors
router.get('/', getTutors);
router.get('/:id', getTutorById);

module.exports = router;
