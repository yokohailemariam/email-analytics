import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Meeting", value: 400, fill: "var(--color-Meeting)" },
  { name: "Proposal", value: 300, fill: "var(--color-Proposal)" },
  { name: "Budget", value: 200, fill: "var(--color-Budget)" },
  { name: "Timeline", value: 100, fill: "var(--color-Timeline)" },
];

const chartConfig = {
  value: {
    label: "Visitors",
  },
  Meeting: {
    label: "Meeting",
    color: "hsl(var(--chart-1))",
  },
  Budget: {
    label: "Budget",
    color: "hsl(var(--chart-2))",
  },
  Timeline: {
    label: "Timeline",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieChartComponent() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Keyword Analysis</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
