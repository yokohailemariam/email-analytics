import { BarChartComponent } from "@/components/charts/BarChart";
import { LineChartComponent } from "@/components/charts/LineChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import { ChartConfig } from "@/components/ui/chart";

const DataVisualization = () => {
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
    <div className="p-3 space-y-3">
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
    </div>
  );
};

export default DataVisualization;
