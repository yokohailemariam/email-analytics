import { getEmailResponse } from "@/api/email-response-api";
import { useQuery } from "@tanstack/react-query";

export const useGetEmailResponse = () => {
  return useQuery({
    queryKey: ["email-response"],
    queryFn: getEmailResponse,
  });
};
