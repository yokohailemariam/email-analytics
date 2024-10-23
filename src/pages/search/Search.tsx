import ETable from "@/components/SearchTable";
import { useSearchStore } from "@/hooks/store";
import { useSearch } from "@/hooks/use-search";
import { createColumnHelper } from "@tanstack/react-table";
import { SearchX } from "lucide-react";

const Search = () => {
  const { q } = useSearchStore();
  const { data, isLoading } = useSearch(q);

  type EmailResponse = {
    id: number;
    email: string;
    name: string;
    body: string;
    date: string;
  };

  const emailData = data?.map((item) => ({
    id: item.id,
    email: item.recipient,
    name: item.recipient,
    body: item.subject,
    date: item.sent_at,
  })) as unknown as EmailResponse[];

  const columnHelper = createColumnHelper<EmailResponse>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("body", {
      cell: (info) => (
        <div className=" md:max-w-2xl truncate"> {info.getValue()}</div>
      ),
    }),
    columnHelper.accessor("date", {
      cell: (info) => info.getValue(),
    }),
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
        <div className="rounded-full bg-gray-100 p-4 mb-6">
          <SearchX className="h-8 w-8 text-gray-400" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No results found
        </h3>
      </div>
    );
  }

  return <ETable columns={columns} data={emailData} />;
};

export default Search;
