import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { BarChart, LineChart, PieChart } from "@/components/ui/chart";
import {
  //   Search,
  Mail,
  Users,
  BarChart2,
  Brain,
  Link,
  Menu,
  X,
  Clock,
  AlignLeft,
  Tag,
  AlertCircle,
  User,
} from "lucide-react";
import { useSidebarDrawState } from "@/hooks/store";
import { BarChartComponent } from "@/components/charts/BarChart";
import { ChartConfig } from "@/components/ui/chart";
import { LineChartComponent } from "@/components/charts/LineChart";
import { PieChartComponent } from "@/components/charts/PieChart";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarDrawState();
  const menuItems = [
    { icon: <Mail className="w-4 h-4" />, label: "Email Analysis" },
    { icon: <Users className="w-4 h-4" />, label: "Responder Profile" },
    { icon: <BarChart2 className="w-4 h-4" />, label: "Data Visualization" },
    { icon: <Brain className="w-4 h-4" />, label: "Advanced Insights" },
    { icon: <Link className="w-4 h-4" />, label: "Integrations" },
    { icon: <User className="w-4 h-4" />, label: "Profile" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black transform transition-transform duration-200 ease-in-out shadow-md ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-8 space-y-3">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start text-black hover:bg-black hover:text-white px-4 py-5"
          >
            {item.icon}
            <span className="ml-4">{item.label}</span>
          </Button>
        ))}
      </nav>
    </div>
  );
};

const DashboardTwo = () => {
  const { toggleSidebar } = useSidebarDrawState();

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

  // const chartData3 = [
  //   { name: "Meeting", value: 400 },
  //   { name: "Proposal", value: 300 },
  //   { name: "Budget", value: 200 },
  //   { name: "Timeline", value: 100 },
  // ];

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
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-4 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Email Analysis </h1>
          </div>
          <Input className="w-[300px]" placeholder="Search keywords..." />
        </header>
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
                  <CardTitle className="text-sm font-medium">
                    Top Keyword
                  </CardTitle>
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

            {/* <Card>
              <CardHeader>
                <CardTitle>Email Sent Time Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { name: "12 AM - 6 AM", value: 400 },
                    { name: "6 AM - 12 PM", value: 300 },
                    { name: "12 PM - 6 PM", value: 200 },
                    { name: "6 PM - 12 AM", value: 278 },
                  ]}
                  index="name"
                  categories={["value"]}
                  colors={["blue"]}
                  yAxisWidth={48}
                />
              </CardContent>
            </Card> */}
            {/* <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Time Slots vs Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { time: "9 AM", responses: 10 },
                      { time: "12 PM", responses: 20 },
                      { time: "3 PM", responses: 15 },
                      { time: "6 PM", responses: 25 },
                    ]}
                    index="time"
                    categories={["responses"]}
                    colors={["green"]}
                    yAxisWidth={40}
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: "Meeting", value: 400 },
                      { name: "Proposal", value: 300 },
                      { name: "Budget", value: 200 },
                      { name: "Timeline", value: 100 },
                    ]}
                    index="name"
                    categories={["value"]}
                    colors={["sky", "blue", "indigo", "violet"]}
                  />
                </CardContent>
              </Card>
            </div> */}
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
            {/* <Card>
              <CardHeader>
                <CardTitle>Response Rate by Job Title</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { title: "CEO", rate: 80 },
                    { title: "Manager", rate: 65 },
                    { title: "Developer", rate: 45 },
                    { title: "Designer", rate: 55 },
                  ]}
                  index="title"
                  categories={["rate"]}
                  colors={["purple"]}
                  yAxisWidth={48}
                />
              </CardContent>
            </Card> */}
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
      </div>
    </div>
  );
};

export default DashboardTwo;
