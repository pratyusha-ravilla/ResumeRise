// //resumeRoutes.js

// const express = require("express");
// const router = express.Router();
// const resumeController = require("../controllers/resumeController");
// const authMiddleware = require("../middleware/authMiddleware");

// // Create a new resume
// router.post(
//   "/",
//   authMiddleware.authenticateUser,
//   resumeController.createResume
// );

// // Get all resumes for the authenticated user

// router.get(
//   "/user-resumes",
//   authMiddleware.authenticateUser,
//   resumeController.getAllResumesForUser
// );

// // Get a specific resume
// router.get("/:id", authMiddleware.authenticateUser, resumeController.getResume);

// // Update a specific resume
// router.put(
//   "/:id",
//   authMiddleware.authenticateUser,
//   resumeController.updateResume
// );

// // Delete a specific resume
// router.delete(
//   "/:id",
//   authMiddleware.authenticateUser,
//   resumeController.deleteResume
// );

// // Download resume
// router.get(
//   "/:id/download",
//   authMiddleware.authenticateUser,
//   resumeController.downloadResume
// );

// module.exports = router;



// //resumeRoutes.js

// const express = require("express");
// const router = express.Router();
// const resumeController = require("../controllers/resumeController");
// const authMiddleware = require("../middleware/authMiddleware");

// // Create a new resume
// router.post(
//   "/",
//   authMiddleware.authenticateUser,
//   resumeController.createResume
// );


// // Get all resumes for the authenticated user

// router.get(
//   "/user-resumes",
//   authMiddleware.authenticateUser,
//   resumeController.getAllResumesForUser
// );

// // Get a specific resume
// router.get("/:id", authMiddleware.authenticateUser, resumeController.getResume);

// // Update a specific resume
// router.put(
//   "/:id",
//   authMiddleware.authenticateUser,
//   resumeController.updateResume
// );

// // Delete a specific resume
// router.delete(
//   "/:id",
//   authMiddleware.authenticateUser,
//   resumeController.deleteResume
// );


// // Download resume
// router.get('/:id/download', authMiddleware.authenticateUser, resumeController.downloadResume);


// // Get resume PDF data
// router.get('/:id/pdf-data', authMiddleware.authenticateUser, resumeController.getResumePdfData);
// module.exports = router;
 





const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new resume
router.post(
  "/new",
  authMiddleware.authenticateUser,
  resumeController.createResume
);

// Get all resumes for the authenticated user
router.get(
  "/user-resumes",
  authMiddleware.authenticateUser,
  resumeController.getAllResumesForUser
);

// Get a specific resume
router.get("/:id", authMiddleware.authenticateUser, resumeController.getResume);

// Update a specific resume
router.put(
  "/:id",
  authMiddleware.authenticateUser,
  resumeController.updateResume
);

// Delete a specific resume
router.delete(
  "/:id",
  authMiddleware.authenticateUser,
  resumeController.deleteResume
);

// Download resume
router.get(
  "/:id/download",
  authMiddleware.authenticateUser,
  resumeController.downloadResume
);

// Get resume PDF data
router.get(
  "/:id/pdf-data",
  authMiddleware.authenticateUser,
  resumeController.getResumePdfData
);

module.exports = router;
