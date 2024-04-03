// // resumeController.js

// const Resume = require('../models/Resume');
// const fs = require('fs');

// // Controller to create a new resume
// exports.createResume = async (req, res) => {
//   try {
//     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references } = req.body;
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     const newResume = await Resume.create({
//       user: userId, // Assigning the logged-in user's ID to the resume
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references
//     });

//     res.status(201).json({ success: true, data: newResume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to get all resumes for a user
// exports.getAllResumes = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     const resumes = await Resume.find({ user: userId });

//     res.status(200).json({ success: true, data: resumes });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to get a specific resume
// exports.getResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     res.status(200).json({ success: true, data: resume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to update a specific resume
// exports.updateResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;
//     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references } = req.body;

//     let resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     resume = await Resume.findByIdAndUpdate(resumeId, {
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references
//     }, { new: true });

//     res.status(200).json({ success: true, data: resume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to delete a specific resume
// exports.deleteResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     await Resume.findByIdAndDelete(resumeId);

//     res.status(200).json({ success: true, data: {} });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to download a resume
// exports.downloadResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     // Assume resume file path is stored in the database
//     const filePath = resume.filePath;
//     const fileName = resume.fileName;

//     // Stream the file to the client for download
//     res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//     fs.createReadStream(filePath).pipe(res);
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // resumeController.js

// const Resume = require("../models/Resume");
// const fs = require("fs");

// //Controller to create a new resume
// exports.createResume = async (req, res) => {
//   try {
//     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references, filePath, fileName } = req.body;
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     const newResume = await Resume.create({
//       user: userId, // Assigning the logged-in user's ID to the resume
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references,
//       filePath,
//       fileName
//     });

//     res.status(201).json({ success: true, data: newResume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // // Controller to create a new resume
// // exports.createResume = async (req, res) => {
// //   try {
// //     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references} = req.body;
// //     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

// //      // Extract file path and name from file upload middleware (multer)
// //     const filePath = req.file.path; // Assuming multer middleware is properly configured
// //     const fileName = req.file.originalname; // Assuming multer middleware is properly configured

// //     const newResume = await Resume.create({
// //       user: userId,
// //       title,
// //       summary,
// //       personalInfo,
// //       experiences,
// //       educations,
// //       skills,
// //       languages,
// //       certifications,
// //       references,
// //       filePath, // Include filePath field
// //       fileName // Include fileName field
// //     });

// //     res.status(201).json({ success: true, data: newResume });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // };

// // // Controller to create a new resume
// // exports.createResume = async (req, res) => {
// //   try {
// //     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references} = req.body;
// //     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

// //     // Check if file is uploaded
// //     if (!req.file) {
// //       return res.status(400).json({ success: false, error: 'No file uploaded' });
// //     }

// //     // Extract file path and name from file upload middleware (multer)
// //     const filePath = req.file.path; // Assuming multer middleware is properly configured
// //     const fileName = req.file.originalname; // Assuming multer middleware is properly configured

// //     const newResume = await Resume.create({
// //       user: userId,
// //       title,
// //       summary,
// //       personalInfo,
// //       experiences,
// //       educations,
// //       skills,
// //       languages,
// //       certifications,
// //       references,
// //       filePath, // Include filePath field
// //       fileName // Include fileName field
// //     });

// //     res.status(201).json({ success: true, data: newResume });
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // };

// // Controller to get all resumes for the authenticated user
// exports.getAllResumesForUser = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     const resumes = await Resume.find({ user: userId });

//     res.status(200).json({ success: true, data: resumes });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to get a specific resume
// exports.getResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Resume not found" });
//     }

//     res.status(200).json({ success: true, data: resume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to update a specific resume
// exports.updateResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;
//     const {
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references,
//     } = req.body;

//     let resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Resume not found" });
//     }

//     resume = await Resume.findByIdAndUpdate(
//       resumeId,
//       {
//         title,
//         summary,
//         personalInfo,
//         experiences,
//         educations,
//         skills,
//         languages,
//         certifications,
//         references,
//       },
//       { new: true }
//     );

//     res.status(200).json({ success: true, data: resume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to delete a specific resume
// exports.deleteResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Resume not found" });
//     }

//     await Resume.findByIdAndDelete(resumeId);

//     res.status(200).json({ success: true, data: {} });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // // Controller to download a resume
// // exports.downloadResume = async (req, res) => {
// //   try {
// //     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
// //     const resumeId = req.params.id;

// //     const resume = await Resume.findOne({ _id: resumeId, user: userId });

// //     if (!resume) {
// //       return res.status(404).json({ success: false, error: 'Resume not found' });
// //     }

// //     // Assume resume file path is stored in the database
// //     const filePath = resume.filePath;
// //     const fileName = resume.fileName;

// //     // Stream the file to the client for download
// //     res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
// //     fs.createReadStream(filePath).pipe(res);
// //   } catch (error) {
// //     res.status(500).json({ success: false, error: error.message });
// //   }
// // };

// // Controller to upload a resume
// exports.uploadResume = async (req, res) => {
//   try {
//     // Extract resume file and other details from the request
//     const { file, otherData } = req.body;

//     // Save resume file to a directory on your server
//     const filePath = `/uploads/resumes/${file.name}`;
//     const fileName = file.name;
//     file.mv(filePath); // Move the uploaded file to the specified path

//     // Save resume details including file path and file name to the database
//     const newResume = new Resume({
//       ...otherData,
//       filePath: filePath,
//       fileName: fileName
//     });
//     await newResume.save();

//     res.status(201).json({ success: true, data: newResume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// // Controller to download a resume
// exports.downloadResume = async (req, res) => {
//   try {
//     const resumeId = req.params.id;

//     const resume = await Resume.findById(resumeId);

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     // Ensure that the filePath field is populated in the Resume model
//     if (!resume.filePath) {
//       return res.status(500).json({ success: false, error: 'File path is not defined' });
//     }

//     const filePath = resume.filePath;
//     const fileName = resume.fileName;

//     // Stream the file to the client for download
//     res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//     fs.createReadStream(filePath).pipe(res);
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };




// resumeController.js

const Resume = require("../models/Resume");
const fs = require("fs");

// Controller to create a new resume
// exports.createResume = async (req, res) => {
//   try {
//     const {
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references,
//       filePath,
//       fileName,
//     } = req.body;
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     const newResume = await Resume.create({
//       user: userId, // Assigning the logged-in user's ID to the resume
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references,
//       filePath,
//       fileName,
//     });

//     res.status(201).json({ success: true, data: newResume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// Controller to create a new resume
// exports.createResume = async (req, res) => {
//   try {
//     const { title, summary, personalInfo, experiences, educations, skills, languages, certifications, references } = req.body;
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

//     // Manually handle file upload
//     if (!req.files || !req.files.resume) {
//       return res.status(400).json({ success: false, error: 'No resume file uploaded' });
//     }

//     const resumeFile = req.files.resume;
//     const filePath = `/uploads/resumes/${resumeFile.name}`; // Define the file path where the resume will be saved

//     // Move the uploaded resume file to the specified path
//     await resumeFile.mv(filePath);

//     const newResume = await Resume.create({
//       user: userId, // Assigning the logged-in user's ID to the resume
//       title,
//       summary,
//       personalInfo,
//       experiences,
//       educations,
//       skills,
//       languages,
//       certifications,
//       references,
//       filePath // Include filePath field
//     });

//     res.status(201).json({ success: true, data: newResume });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// Controller to create a new resume
exports.createResume = async (req, res) => {
  try {
    const {
      title,
      summary,
      personalInfo,
      experiences,
      educations,
      skills,
      languages,
      certifications,
      references,
      filePath,
      fileName,
    } = req.body;
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

    const newResume = await Resume.create({
      user: userId, // Assigning the logged-in user's ID to the resume
      title,
      summary,
      personalInfo,
      experiences,
      educations,
      skills,
      languages,
      certifications,
      references,
      filePath,
      fileName,
    });

    res.status(201).json({ success: true, data: newResume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Controller to get all resumes for the authenticated user
exports.getAllResumesForUser = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication

    const resumes = await Resume.find({ user: userId });

    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to get a specific resume
exports.getResume = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
    const resumeId = req.params.id;

    const resume = await Resume.findOne({ _id: resumeId, user: userId });

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, error: "Resume not found" });
    }

    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to update a specific resume
exports.updateResume = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
    const resumeId = req.params.id;
    const {
      title,
      summary,
      personalInfo,
      experiences,
      educations,
      skills,
      languages,
      certifications,
      references,
    } = req.body;

    let resume = await Resume.findOne({ _id: resumeId, user: userId });

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, error: "Resume not found" });
    }

    resume = await Resume.findByIdAndUpdate(
      resumeId,
      {
        title,
        summary,
        personalInfo,
        experiences,
        educations,
        skills,
        languages,
        certifications,
        references,
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: resume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to delete a specific resume
exports.deleteResume = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
    const resumeId = req.params.id;

    const resume = await Resume.findOne({ _id: resumeId, user: userId });

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, error: "Resume not found" });
    }

    await Resume.findByIdAndDelete(resumeId);

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// // Controller to download a resume
// exports.downloadResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res.status(404).json({ success: false, error: 'Resume not found' });
//     }

//     // Assume resume file path is stored in the database
//     const filePath = resume.filePath;
//     const fileName = resume.fileName;

//     // Stream the file to the client for download
//     res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//     fs.createReadStream(filePath).pipe(res);
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// Controller to upload a resume
exports.uploadResume = async (req, res) => {
  try {
    // Extract resume file and other details from the request
    const { file, otherData } = req.body;

    // Save resume file to a directory on your server
    const filePath = `/uploads/resumes/${file.name}`;
    const fileName = file.name;
    file.mv(filePath); // Move the uploaded file to the specified path

    // Save resume details including file path and file name to the database
    const newResume = new Resume({
      ...otherData,
      filePath: filePath,
      fileName: fileName,
    });
    await newResume.save();

    res.status(201).json({ success: true, data: newResume });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller to download a resume
// exports.downloadResume = async (req, res) => {
//   try {
//     const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
//     const resumeId = req.params.id;

//     const resume = await Resume.findOne({ _id: resumeId, user: userId });

//     if (!resume) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Resume not found" });
//     }

//     // Ensure that the filePath field is populated in the Resume model
//     if (!resume.filePath) {
//       return res
//         .status(500)
//         .json({ success: false, error: "File path is not defined" });
//     }

//     const filePath = resume.filePath;
//     const fileName = resume.fileName;

//     // Stream the file to the client for download
//     res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
//     fs.createReadStream(filePath).pipe(res);
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

exports.downloadResume = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
    const resumeId = req.params.id;

    console.log("User ID:", userId);
    console.log("Resume ID:", resumeId);

    const resume = await Resume.findOne({ _id: resumeId, user: userId });

    console.log("Retrieved Resume:", resume);

    if (!resume) {
      console.error("Resume not found");
      return res
        .status(404)
        .json({ success: false, error: "Resume not found" });
    }

    // Ensure that the filePath field is populated in the Resume model
    if (!resume.filePath || !resume.fileName) {
      console.error("File path or file name is not defined");
      return res
        .status(500)
        .json({ success: false, error: "File path or file name is not defined" });
    }

    const filePath = resume.filePath;
    const fileName = resume.fileName;

    console.log("File Path:", filePath);
    console.log("File Name:", fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error("Resume file not found at:", filePath);
      return res
        .status(404)
        .json({ success: false, error: "Resume file not found" });
    }

    // Stream the file to the client for download
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    fs.createReadStream(filePath).pipe(res);
  } catch (error) {
    console.error("Error downloading resume:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};



// Controller to get resume PDF data
exports.getResumePdfData = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the user ID is stored in the request object after authentication
    const resumeId = req.params.id;

    const resume = await Resume.findOne({ _id: resumeId, user: userId });

    if (!resume) {
      return res
        .status(404)
        .json({ success: false, error: "Resume not found" });
    }

    // Here you can generate the PDF data from the resume object
    // For example, if you're using a library like react-pdf, you can render the resume data to PDF

    // Once you have the PDF data, you can send it as a response
    res.status(200).json({ success: true, data: pdfData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
