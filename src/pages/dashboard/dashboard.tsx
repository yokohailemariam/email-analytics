import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";
import { BarChartComponent } from "@/components/charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import { PieChartComponent } from "@/components/charts/PieChart";
import TimeSlotResponse from "@/components/TimeSlotResponse";
import EmailStatistics from "../email-statistics/EmailStatistics";

const DashboardTwo = () => {
  const chartData = [
    { name: "12 AM - 6 AM", value: 400 },
    { name: "6 AM - 12 PM", value: 300 },
    { name: "12 PM - 6 PM", value: 200 },
    { name: "6 PM - 12 AM", value: 278 },
    { name: "6 PM - 12 AM", value: 178 },
    { name: "6 PM - 12 AM", value: 218 },
  ];

  const chartConfig = {
    value: {
      label: "value",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
      <div className="space-y-6">
        <EmailStatistics />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BarChartComponent
            title={"Email Sent Time Analysis"}
            dataKeyXAxis={"name"}
            dataKeyBar={"value"}
            chartConfig={chartConfig}
            chartData={chartData}
          />
          <TimeSlotResponse />
        </div>
        <PieChartComponent />

        <Card>
          <CardHeader>
            <CardTitle>Responder Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-4 ">
                <div className="flex items-center gap-6">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=random&size=128"
                    alt="Profile"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Manager at TechCorp
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/john-doe/?originalSubdomain=uk",
                      "_blank"
                    )
                  }
                >
                  View on LinkedIn
                </Button>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center gap-6">
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=random&size=128"
                    alt="Profile"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">
                      CEO at StartupX
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      " https://www.linkedin.com/in/jane-doe-08477b157/",
                      "_blank"
                    )
                  }
                >
                  View on LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API & CRM Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button disabled={true} variant="outline">
                <Link className="mr-2 size-6" />
                Connect LinkedIn
              </Button>
              <Button disabled={true} variant="outline">
                <Link className="mr-2 size-6" />
                Connect Salesforce
              </Button>
              <Button disabled={true} variant="outline">
                <Link className="mr-2 size-6" />
                Connect HubSpot
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default DashboardTwo;
