import { getSearch } from "@/api/search-api";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (q: string) => {
  return useQuery({
    queryKey: ["search", q],
    queryFn: () => getSearch(q),
  });
};
