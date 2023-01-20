import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  
  {
    name: "December",
    SaleOrder: 762,
    OpenDocument: 68,
    CloseDocument: 456
  },
  {
    name: "January",
    SaleOrder: 789,
    OpenDocument: 76,
    CloseDocument: 478
  },
  {
    name: "February",
    SaleOrder: 801,
    OpenDocument: 89,
    CloseDocument: 521
  },
  {
    name: "March",
    SaleOrder: 821,
    OpenDocument: 101,
    CloseDocument: 563
  }
];

export default function Barcharts() {
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 25,
        bottom: 15
      }}
    >
       {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis  scaleToFit={true}  dataKey="name" />
      <YAxis yAxisId="left"  orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="middle" orientation="middle" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#FF0000" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="SaleOrder" fill="#8884d8" />
      <Bar yAxisId="middle" dataKey="OpenDocument" fill="#82ca9d" />
      <Bar yAxisId="right" dataKey="CloseDocument" fill="#FF0000" />
    </BarChart>
  );
}