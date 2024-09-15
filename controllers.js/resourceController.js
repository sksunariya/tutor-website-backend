const Resource = require('../models/Resource');

// Create a new resource
exports.createResource = async (req, res) => {
  try {
    const { title, description, category, fileUrl, videoUrl, type } = req.body;
    const resource = new Resource({ title, description, category, fileUrl, videoUrl, type });
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all resources
exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a resource by ID
exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a resource by ID
exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json({ message: 'Resource deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
