import CircularLoader from "@/components/CircularLoading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetEmailStatistics } from "@/hooks/use-email-statistics";
import { Clock, AlignLeft, Tag, AlertCircle } from "lucide-react";

const EmailStatistics = () => {
  const { data, isLoading } = useGetEmailStatistics();

  if (isLoading) {
    return (
      <div className="p-10">
        <CircularLoader />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Response Time
          </CardTitle>
          <Clock className="size-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.average_response_time}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Email Length
          </CardTitle>
          <AlignLeft className="size-6 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.average_email_length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Keyword</CardTitle>
          <Tag className="size-6 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.top_keywords[0][0]}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Non-responses</CardTitle>
          <AlertCircle className="size-6 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.non_responded_percentage}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailStatistics;
