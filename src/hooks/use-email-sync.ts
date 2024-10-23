import { getEmailSync } from "@/api/email-sync-api";
import { useQuery } from "@tanstack/react-query";

export const useGetEmailSync = () => {
  return useQuery({
    queryKey: ["email-sync"],
    queryFn: getEmailSync,
  });
};
