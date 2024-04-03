import axios from 'axios';

const downloadResume = async (resumeId, authToken) => {
  try {
    const response = await axios.get(`/api/resumes/${resumeId}/download`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
      },
      responseType: 'blob', // Set response type to 'blob' to handle binary data
    });
    
    // Create a Blob from the response data
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);
    
    // Create an anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf'; // Specify the file name
    
    // Append the anchor element to the document body and click it programmatically to trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};

export default downloadResume;
