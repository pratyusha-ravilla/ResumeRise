

//Resume.js


const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String }
});

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String }
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String } // Beginner, Intermediate, Advanced, etc.
});

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  proficiency: { type: String } // Fluent, Intermediate, Beginner, etc.
});

const certificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  authority: { type: String },
  licenseNumber: { type: String },
  startDate: { type: Date },
  endDate: { type: Date }
});

const referenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  email: { type: String },
  phone: { type: String }
});

const personalInfoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  country: { type: String }
});

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  summary: { type: String },
  personalInfo: [personalInfoSchema],
  experiences: [experienceSchema],
  educations: [educationSchema],
  skills: [skillSchema],
  languages: [languageSchema],
  certifications: [certificationSchema],
  references: [referenceSchema],
  filePath: { type: String }, 
  fileName: { type: String}, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model('Resume', resumeSchema);



