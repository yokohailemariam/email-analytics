import axios, { AxiosError } from "axios";
export const BaseUrl = "https://email-analytics-surl.onrender.com";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error(`Error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      console.error("Error: No response received from the server.");
    } else {
      console.error(`Error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
