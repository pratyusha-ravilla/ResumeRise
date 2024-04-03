
//userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Get user dashboard
router.get('/dashboard', authMiddleware.authenticateUser, userController.getUserDashboard);

// Get user profile
router.get('/profile', authMiddleware.authenticateUser, userController.getUserProfile);

// Update user profile
router.put('/profile', authMiddleware.authenticateUser, userController.updateUserProfile);

// Get all users
router.get('/', authMiddleware.authenticateUser, userController.getAllUsers);

// Get user by ID
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);

// Update user by ID
router.put('/:id', authMiddleware.authenticateUser, userController.updateUserById);

// Delete user by ID
router.delete('/:id', authMiddleware.authenticateUser, userController.deleteUserById);





module.exports = router;


