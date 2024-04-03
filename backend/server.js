

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const resumeRoutes = require("./routes/resumeRoutes");
// const authMiddleware = require("./middleware/authMiddleware");
// const connectDB = require("./database/dbconnection");
// const resumeController = require("./controllers/resumeController"); // Add this line
// const path = require("path");
// const fs = require("fs");

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// connectDB();

// // Define the directory path where uploaded resumes are stored
// const resumesDirectory = path.join(__dirname, "uploads", "resumes");

// // Create the directory if it doesn't exist
// if (!fs.existsSync(resumesDirectory)) {
//   fs.mkdirSync(resumesDirectory, { recursive: true });
// }

// // Serve static files from the specified directory
// app.use("/uploads/resumes", express.static(resumesDirectory));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", authMiddleware.authenticateUser, userRoutes);

// // Route handling for creating new resumes
// app.post("/api/resumes/new", authMiddleware.authenticateUser, resumeController.createResume);

// // Use resume routes
// app.use("/api/resumes/", authMiddleware.authenticateUser, resumeRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, error: "Internal server error" });
// });

// // Start server
// const PORT = process.env.PORT || 9900;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





//main code 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const connectDB = require("./database/dbconnection");
const resumeController = require("./controllers/resumeController");
const path = require("path");
const fs = require("fs");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
connectDB();

// Define the directory path where uploaded resumes are stored
const resumesDirectory = path.join(__dirname, "uploads", "resumes");

// Create the directory if it doesn't exist
if (!fs.existsSync(resumesDirectory)) {
  fs.mkdirSync(resumesDirectory, { recursive: true });
}

// Serve static files from the specified directory
app.use("/uploads/resumes", express.static(resumesDirectory));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", authMiddleware.authenticateUser, userRoutes);

// Route handling for creating new resumes
app.post("/api/resumes/new", authMiddleware.authenticateUser, resumeController.createResume);

// Route handling for downloading resumes in PDF format
app.get("/api/resumes/:resumeId/download", authMiddleware.authenticateUser, resumeController.downloadResume);

// Use resume routes
app.use("/api/resumes/", authMiddleware.authenticateUser, resumeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});








// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const nodemailer = require("nodemailer");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const resumeRoutes = require("./routes/resumeRoutes");
// const authMiddleware = require("./middleware/authMiddleware");
// const connectDB = require("./database/dbconnection");
// const resumeController = require("./controllers/resumeController");
// const path = require("path");
// const fs = require("fs");

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB Connection
// connectDB();

// // Define the directory path where uploaded resumes are stored
// const resumesDirectory = path.join(__dirname, "uploads", "resumes");

// // Create the directory if it doesn't exist
// if (!fs.existsSync(resumesDirectory)) {
//   fs.mkdirSync(resumesDirectory, { recursive: true });
// }

// // Serve static files from the specified directory
// app.use("/uploads/resumes", express.static(resumesDirectory));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", authMiddleware.authenticateUser, userRoutes);

// // Route handling for creating new resumes
// app.post("/api/resumes/new", authMiddleware.authenticateUser, resumeController.createResume);

// // Route handling for downloading resumes in PDF format
// app.get("/api/resumes/:resumeId/download", authMiddleware.authenticateUser, resumeController.downloadResume);

// // Use resume routes
// app.use("/api/resumes/", authMiddleware.authenticateUser, resumeRoutes);

// // Route handling for sending emails
// app.post("/api/send-email", (req, res) => {
//   const { name, email, subject, message } = req.body;

//   const transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "6141ba4fbd6f74",
//       pass: "b7a63647ea480a"
//     }
//   });

//   // Define email options
//   const mailOptions = {
//     from: process.env.EMAIL_FROM,
//     to: process.env.EMAIL_TO,
//     subject: subject,
//     text: `${name} (${email}) says: ${message}`,
//   };

//   // Send the email
//   transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, error: "Error sending email" });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ success: true, message: "Email sent successfully" });
//     }
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, error: "Internal server error" });
// });

// // Start server
// const PORT = process.env.PORT || 9900;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
