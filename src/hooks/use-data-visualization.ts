import { getResponseTimeSlot } from "@/api/email-response-slot-api";
import { useQuery } from "@tanstack/react-query";

export const useGetResponseTimeSlot = () => {
  return useQuery({
    queryKey: ["response-time-slot"],
    queryFn: getResponseTimeSlot,
  });
};
