import { TChartData } from "@/types/api";
import { LineChartComponent } from "./charts/LineChart";
import { ChartConfig } from "./ui/chart";
// import { useGetResponseTimeSlot } from "@/hooks/use-data-visualization";
// import CircularLoader from "./CircularLoading";

const TimeSlotResponse = () => {
  // const { data: ResponseTimeSlotData, isLoading: isLoadingResponseTimeSlot } =
  //   useGetResponseTimeSlot();

  const ResponseTimeSlotData = {
    "6am - 9am": 12,
    "9am - 12pm": 18,
    "12pm - 3pm": 12,
    "3pm - 6pm": 22,
    "6pm - 9pm": 10,
    "9pm - 12am": 10,
    "12am - 6am": 16,
  };

  const convertToChartData = (
    data: typeof ResponseTimeSlotData
  ): TChartData[] => {
    return [
      {
        name: "6am - 9am",
        value: data?.["6am - 9am"] ?? 0,
      },
      {
        name: "9am - 12pm",
        value: data?.["9am - 12pm"] ?? 0,
      },
      {
        name: "12pm - 3pm",
        value: data?.["12pm - 3pm"] ?? 0,
      },
      {
        name: "3pm - 6pm",
        value: data?.["3pm - 6pm"] ?? 0,
      },
      {
        name: "6pm - 9pm",
        value: data?.["6pm - 9pm"] ?? 0,
      },
      {
        name: "9pm - 12am",
        value: data?.["9pm - 12am"] ?? 0,
      },
      {
        name: "12am - 6am",
        value: data?.["12am - 6am"] ?? 0,
      },
    ];
  };

  const chartData = convertToChartData(ResponseTimeSlotData);

  const chartConfig2 = {
    value: {
      label: "value",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  // if (isLoadingResponseTimeSlot) {
  //   return <CircularLoader />;
  // }

  return (
    <LineChartComponent
      title={"Response Time Slot"}
      dataKeyXAxis={"name"}
      dataKeyBar={"value"}
      chartConfig={chartConfig2}
      chartData={chartData}
    />
  );
};

export default TimeSlotResponse;
