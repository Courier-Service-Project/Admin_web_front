import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Orders per Day"],
  ["New Orders", 11],
  ["Pending", 2],
  ["In - Progress", 2],
  ["Complete", 2],
];

export const options = {
  title: "Today Performance",
  is3D: true,
  colors: ["#4CAF50", "#FFC107", "#2196F3", "#F44336"],
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"350px"}
      height={"400px"}
    />
  );
}
