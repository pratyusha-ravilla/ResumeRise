// src/api/resumeApi.js
import axios from "axios";

const baseURL = "http://localhost:9900/api/resumes";

const resumeApi = axios.create({
  baseURL,
});

export const createResume = async (resumeData) => {
  try {
    const response = await resumeApi.post("/new", resumeData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// export const getAllResumes = async () => {
//   try {
//     const response = await resumeApi.get("/");
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };


export const getAllResumes = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    const response = await resumeApi.get("/user-resumes", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getResumeById = async (resumeId) => {
  try {
    const response = await resumeApi.get(`/${resumeId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateResume = async (resumeId, resumeData) => {
  try {
    const response = await resumeApi.put(`/${resumeId}`, resumeData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// export const deleteResume = async (resumeId) => {
//   try {
//     const response = await resumeApi.delete(`/${resumeId}`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// export const downloadResume = async (resumeId) => {
//   try {
//     const response = await resumeApi.get(`/${resumeId}/download`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// export const downloadResume = async (resumeId, authToken) => {
//   try {
//     const response = await resumeApi.get(`/${resumeId}/download`, {
//       headers: {
//         Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };


export const deleteResume = async (resumeId) => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    const response = await resumeApi.delete(`/${resumeId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const downloadResume = async (resumeId, authToken, downloadFormat) => {
  try {
    const response = await resumeApi.get(`/${resumeId}/download`, {
      responseType: "blob", // Set response type to blob to handle binary data
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        format: downloadFormat, // Pass download format as a query parameter
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


// export const getResumePdfData = async (resumeId) => {
//   try {
//     const token = localStorage.getItem("token"); // Retrieve the token from local storage

//     const response = await resumeApi.get(`/${resumeId}/pdf-data`, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const getResumePdfData = async (resumeId) => {
  try {
    if (!resumeId) {
      throw new Error("Resume ID is not provided");
    }

    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    const response = await resumeApi.get(`/${resumeId}/pdf-data`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    // Check if response exists and contains data property
    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other resume-related API functions as needed

export default resumeApi;
