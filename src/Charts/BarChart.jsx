import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { BACKEND_URL } from '../Constants';

// export const data = [
//   ["Months", "Orders"],
//   ["Jan", monthlyOrderCount],
//   ["Feb", 460],
//   ["Mar", 660],
//   ["Apr", 1030],
//   ["May", 550],
//   ["Jun", 300],
//   ["Jul", 1050],
//   ["Aug", 700],
//   ["Sep", 250],
//   ["Oct", 500],
//   ["Nov", 1000],
//   ["Dec", 1040],
// ];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Order growth per month",
  },
};

export default function BarChart() {

  const [monthlyOrderCount,setMonthlyOrderCount]= useState([]);
  useEffect(()=>{
    fetchMonthlyOrderCount();
  },[])

  const fetchMonthlyOrderCount = async () =>{
    try {
      const result = await axios.get(`${BACKEND_URL}/orders/MonthlyOrderCount`);
      setMonthlyOrderCount(result.data.message);
      console.log(result.data.message);
    }
    catch (error){
      console.error("Error fetching monthly order count", error);
    }
  }

  const getOrderCountForMonth = (monthIndex) => {
    if (monthlyOrderCount.length > 0 && monthlyOrderCount[monthIndex]) {
      return monthlyOrderCount[monthIndex].OrderCount || 0;
    }
    return 0; // Default to 0 if data is not yet loaded or if monthIndex is out of bounds
  };

  const data = [
    ["Months", "Orders"],
    ["Jan", getOrderCountForMonth(0)],
    ["Feb", getOrderCountForMonth(1)],
    ["Mar", getOrderCountForMonth(2)],
    ["Apr", getOrderCountForMonth(3)],
    ["May", getOrderCountForMonth(4)],
    ["Jun", getOrderCountForMonth(5)],
    ["Jul", getOrderCountForMonth(6)],
    ["Aug", getOrderCountForMonth(7)],
    ["Sep", getOrderCountForMonth(8)],
    ["Oct", getOrderCountForMonth(9)],
    ["Nov", getOrderCountForMonth(10)],
    ["Dec", getOrderCountForMonth(11)],
  ];

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
