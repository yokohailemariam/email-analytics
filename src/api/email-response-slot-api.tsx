import axiosInstance from "./axios";
import { GetResponseTimeSlotResponse } from "../types/api";

export const getResponseTimeSlot =
  async (): Promise<GetResponseTimeSlotResponse> => {
    const response = await axiosInstance.get("/api/get-response-time-slot");
    return response.data;
  };
