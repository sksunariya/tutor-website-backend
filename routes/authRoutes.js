const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const auth = require('../middlewares/auth');
const router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Get logged-in user info
router.get('/me', auth, getUser);

module.exports = router;
