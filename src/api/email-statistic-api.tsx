import { IEmailStatistics } from "@/types/api";
import axiosInstance from "./axios";

export const getEmailStatistics = async (): Promise<IEmailStatistics> => {
  const response = await axiosInstance.get("/api/get-email-statistics/");
  return response.data;
};
