import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Clock, AlignLeft, Tag, AlertCircle } from "lucide-react";
import { BarChartComponent } from "@/components/charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import { LineChartComponent } from "@/components/charts/LineChart";
import { PieChartComponent } from "@/components/charts/PieChart";

const DashboardTwo = () => {
  const chartData = [
    { name: "12 AM - 6 AM", value: 400 },
    { name: "6 AM - 12 PM", value: 300 },
    { name: "12 PM - 6 PM", value: 200 },
    { name: "6 PM - 12 AM", value: 278 },
  ];

  const chartData2 = [
    { time: "9 AM", responses: 10 },
    { time: "12 PM", responses: 20 },
    { time: "3 PM", responses: 15 },
    { time: "6 PM", responses: 25 },
  ];

  const chartConfig = {
    value: {
      label: "value",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const chartConfig2 = {
    responses: {
      label: "responses",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2 hours</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Email Length
              </CardTitle>
              <AlignLeft className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">320 words</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Keyword</CardTitle>
              <Tag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Meeting</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Non-responses
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15%</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BarChartComponent
            title={"Email Sent Time Analysis"}
            dataKeyXAxis={"name"}
            dataKeyBar={"value"}
            chartConfig={chartConfig}
            chartData={chartData}
          />
          <LineChartComponent
            title={"Time Slots vs Responses"}
            dataKeyXAxis={"time"}
            dataKeyBar={"responses"}
            chartConfig={chartConfig2}
            chartData={chartData2}
          />
        </div>
        <PieChartComponent />

        <Card>
          <CardHeader>
            <CardTitle>Responder Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
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
                <Button variant="outline" size="sm">
                  View on LinkedIn
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
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
                <Button variant="outline" size="sm">
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
              <Button variant="outline">
                <Link className="mr-2 h-4 w-4" />
                Connect LinkedIn
              </Button>
              <Button variant="outline">
                <Link className="mr-2 h-4 w-4" />
                Connect Salesforce
              </Button>
              <Button variant="outline">
                <Link className="mr-2 h-4 w-4" />
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
