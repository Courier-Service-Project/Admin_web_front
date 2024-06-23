import React from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BACKEND_URL } from '../Constants';

export function PieChart() {
  const [orderCount, setOrderCount] = useState([]);
    useEffect(()=>{
        fetchOrderCount();
    },[])

    const fetchOrderCount = async () => {
        try {
        const result = await axios.get(`${BACKEND_URL}/orders/orderCounts`);
        setOrderCount(result.data.message);
        console.log(result);
        }
        catch (error) {

        }
    } 

  const data = [
    ["Task", "Orders per Day"],
    ["On pickup",orderCount.onpickCount ],
    ["Pending",orderCount.pendingCount ],
    ["In - Progress", orderCount.ondiliveryCount],
    ["Complete", orderCount.completeCount],
  ];

  const options = {
    title: "Today Performance",
    is3D: true,
  };

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
