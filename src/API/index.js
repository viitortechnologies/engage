import { API_URL, token } from "../config.js";

// Function to get the token from storage (localStorage in this case)
const getToken = () => {
    // return localStorage.getItem("token");
    return token;
  };
  
  // Reusable function for GET requests
  const apiGet = (endpoint) => {
    const token = getToken();
    return fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,  // Include the Bearer token
      },
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
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,  // Include the Bearer token
      },
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
  
  export { apiGet, apiPost };

  