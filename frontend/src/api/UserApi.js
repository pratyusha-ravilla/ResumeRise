// src/api/userApi.js
import axios from "axios";
import { getToken } from "../utils/auth"; // Import the getToken function


const baseURL = "http://localhost:9900/api/users";

const userApi = axios.create({
  baseURL,
});

export const getUserDashboard = async () => {
  try {
    const response = await userApi.get("/dashboard");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const getUserProfile = async () => {
  try {
    const token = getToken();
    // localStorage.getItem("token"); // Retrieve the token from local storage

    const response = await userApi.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// export const updateUserProfile = async (userData) => {
//   try {
//     const response = await userApi.put("/profile", userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };


export const updateUserProfile = async (userData) => {
  try {
    const token = getToken(); // Ensure this function retrieves the token from your storage.
    const response = await userApi.put("/profile", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const getAllUsers = async () => {
  try {
    const response = await userApi.get("/");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await userApi.get(`/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUserById = async (userId, userData) => {
  try {
    const response = await userApi.put(`/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUserById = async (userId) => {
  try {
    const response = await userApi.delete(`/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other user-related API functions as needed

export default userApi;



