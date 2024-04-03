//authMiddleWare.js

// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.authenticateUser = async (req, res, next) => {
//   try {
//     // Check if the Authorization header is present
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer')) {
//       return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
//     }

//     // Extract the token from the Authorization header
//     const token = authHeader.split(' ')[1];

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);

//     // Find the user associated with the token
//     const user = await User.findById(decoded.userId);
//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//     }

//     // Attach the user object to the request for further processing
//     req.user = user;

//     // Call next middleware
//     next();
//   } catch (error) {
//     // Handle token verification errors
//     return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
//   }
// };


const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateUser = async (req, res, next) => {
  try {
    // Exclude authentication for routes handling file uploads
    if (req.path.startsWith('/api/resumes/uploads')) {
      return next();
    }

    // Check if the Authorization header is present
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    // Find the user associated with the token
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }

    // Attach the user object to the request for further processing
    req.user = user;

    // Call next middleware
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};
