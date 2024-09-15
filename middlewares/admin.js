const User = require('../models/User');

const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = admin;
