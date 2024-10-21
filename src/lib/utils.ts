import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BaseUrl = "https://email-analytics-surl.onrender.com";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
});

export default axiosInstance;
