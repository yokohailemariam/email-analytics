import { IEmailResponse } from "@/types/api";
import axiosInstance from "./axios";

export const getEmailResponse = async (): Promise<IEmailResponse> => {
  const response = await axiosInstance.get("/api/get-email-responses/");
  return response.data;
};
