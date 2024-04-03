// /src/components/Resume/ResumeDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ResumeDetails = ({ match }) => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:9900/api/resumes/${match.params.id}`); // Correct URL
        setResume(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching resume details');
        setLoading(false);
      }
    };

    fetchResume();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading resume details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!resume) {
    return <p>Resume not found</p>;
  }

  return (
    <div>
      <h2>Resume Details</h2>
      <p>Title: {resume.title}</p>
      <p>Summary: {resume.summary}</p>
      {/* Add more details as needed */}
      <Link to="/resumes">Back to Resume List</Link>
    </div>
  );
};

export default ResumeDetails;

