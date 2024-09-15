const express = require('express');
const {
  createResource,
  getResources,
  getResourceById,
  updateResource,
  deleteResource
} = require('../controllers/resourceController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const router = express.Router();

// Admin routes for managing resources
router.post('/', auth, admin, createResource);   
router.put('/:id', auth, admin, updateResource); 
router.delete('/:id', auth, admin, deleteResource); 

// Public routes for viewing resources
router.get('/', getResources);
router.get('/:id', getResourceById);

module.exports = router;
