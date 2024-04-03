// userController.js

const User = require("../models/User");
const Resume = require("../models/Resume");

// Get user profile and additional data for dashboard
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    // Fetch user profile
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    // Fetch resumes associated with the user
    const resumes = await Resume.find({ user: userId });
    // Combine user profile, resumes, and personal info
    const userData = { user, resumes, personalInfo: user.personalInfo };
    res.status(200).json({ success: true, data: userData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all users (for admin)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user by ID (for admin)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update user by ID (for admin)
exports.updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete user by ID (for admin)
exports.deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get user dashboard data
exports.getUserDashboard = async (req, res) => {
  try {
    // Implement logic to fetch user dashboard data (if needed)
    const dashboardData = { message: "User dashboard data" };
    res.status(200).json({ success: true, data: dashboardData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

