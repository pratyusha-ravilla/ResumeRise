// src/api/authApi.js
import axios from "axios";

const baseURL = "http://localhost:9900/api/auth";

const authApi = axios.create({
  baseURL,
});

export const signupUser = async (userData) => {
  try {
    const response = await authApi.post("/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await authApi.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other authentication-related API functions as needed

export default authApi;
