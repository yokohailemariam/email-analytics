import axiosInstance from "./axios";

export const getEmailSync = async () => {
  const response = await axiosInstance.get("/api/fetch-and-store-emails");
  return response.data;
};
