// Import the Axios library
import axios from "axios";

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosInstance;
