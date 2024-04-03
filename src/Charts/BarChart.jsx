import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Months", "Orders"],
  ["Jan", 400],
  ["Feb", 460],
  ["Mar", 660],
  ["Apr", 1030],
  ["May", 550],
  ["Jun", 300],
  ["Jul", 1050],
  ["Aug", 700],
  ["Sep", 250],
  ["Oct", 500],
  ["Nov", 1000],
  ["Dec", 1040],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Order growth per month", 
  },
  colors: ["blue"],
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
