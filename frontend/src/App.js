import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Authentication/LoginPage";
import SignupPage from "./pages/Authentication/SignupPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ResumeListPage from "./pages/Resume/ResumeListPage";
import ResumeCreatePage from "./pages/Resume/ResumeCreatePage";
import ResumeEditPage from "./pages/Resume/ResumeEditPage";
import ResumeDetailsPage from "./pages/Resume/ResumeDetailsPage";
import UserListPage from "./pages/User/UserListPage";
import UserDetailsPage from "./pages/User/UserDetailsPage";
// import { getToken } from "./utils/auth";
import "../src/index.css";
import ResumePage from "./pages/Resume/ResumePage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  // const token = getToken();

  return (
    <Router>
      <Routes>
        {/* Add a component for the root route */}
        {/* <Route exact path="/" element={token ? <DashboardPage /> : <LoginPage />} /> */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route exact path="/resumes" element={<ResumeListPage />} />
        <Route path="/resumes/create" element={<ResumeCreatePage />} />
        <Route path="/resumes/:id/edit" element={<ResumeEditPage />} />
        <Route path="/resumes/:id/details" element={<ResumeDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/users" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/resumes/templates" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
