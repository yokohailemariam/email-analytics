import axiosInstance from "./axios";
import { TSearchResponse } from "../types/api";

export const getSearch = async (q: string): Promise<TSearchResponse[]> => {
  const response = await axiosInstance.get(`/api/search-keywords/?q=${q}`);
  return response.data;
};
