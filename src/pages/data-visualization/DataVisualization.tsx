import { BarChartComponent } from "@/components/charts/BarChart";
import { PieChartComponent } from "@/components/charts/PieChart";
import TimeSlotResponse from "@/components/TimeSlotResponse";
import { ChartConfig } from "@/components/ui/chart";

const DataVisualization = () => {
  const chartData = [
    { name: "12 AM - 6 AM", value: 400 },
    { name: "6 AM - 12 PM", value: 300 },
    { name: "12 PM - 6 PM", value: 200 },
    { name: "6 PM - 12 AM", value: 278 },
  ];

  const chartConfig = {
    value: {
      label: "value",
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
        <TimeSlotResponse />
      </div>
      <PieChartComponent />
    </div>
  );
};

export default DataVisualization;
