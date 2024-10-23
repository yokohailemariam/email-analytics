import { getEmailStatistics } from "@/api/email-statistic-api";
import { useQuery } from "@tanstack/react-query";

export const useGetEmailStatistics = () => {
  return useQuery({
    queryKey: ["email-statistics"],
    queryFn: getEmailStatistics,
  });
};
