import { API_URL, token } from "../config.js";
import axios from 'axios';

// Function to get the token from storage (localStorage in this case)
const getToken = () => {
    // return localStorage.getItem("token");
    return token;
  };

const getHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,  // Include the Bearer token
  };
};
  
  // Reusable function for GET requests
  const apiGet = (endpoint) => {
    const token = getToken();
    return fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: getHeader(),
    }).then((response) => {
      if (response.status === 403) {
          throw new Error("Access Forbidden: You may not have permission to access this resource.");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();  // Parse JSON response
    });
  };
  
  // Reusable function for POST requests
  const apiPost = (endpoint, data) => {
    const token = getToken();
    return fetch(endpoint, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify(data),  // Send data as JSON
    }).then((response) => {
      if (response.status === 403) {
          throw new Error("Access Forbidden: You may not have permission to access this resource.");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();  // Parse JSON response
    });
  };


  // Reusable method for GET requests
  export const getRequest = async (url, params = {}, headers = getHeader()) => {
    try {
      const response = await axios.get(`${API_URL}${url}`, {
        params, // Query parameters
        headers, // Optional headers
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  // Reusable method for POST requests
  export const postRequest = async (url, data = {}, headers = getHeader()) => {
    try {
      const response = await axios.post(`${API_URL}${url}`, data, {
        headers, // Optional headers
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };

  // Generic error handler (optional)
  const handleError = (error) => {
    console.error('API request error:', error.response || error.message);
    throw error; // You can throw the error to handle it in the component
  };


  export { apiGet, apiPost };
  

  export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };

  

  