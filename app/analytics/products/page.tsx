"use client";

import Card from "@/app/components/card";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "27 Jan",
    views: 3,
  },
  {
    name: "28 Jan",
    views: 2,
  },
  {
    name: "29 Jan",
    views: 4,
  },
];

const ProductsAnalytics = () => {
  return (
    <div className=" w-full h-screen">
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-primary font-semibold">Products</h2>
        <select
          name="timeline"
          id="timeline"
          className="field-sizing-content text-neutral-600 text-sm p-1 bg-white border border-neutral-300 rounded-sm outline-0"
        >
          <option value="day">Today</option>
          <option value="week">This Weeek</option>
          <option value="month">This Month</option>
          <option value="3month">Last 3 Month</option>
          <option value="6month">Last 6 Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Card title="AVERAGE VIEWS PER CATEGORY">
          <strong className="text-2xl font-normal">0</strong>
        </Card>
        <Card title="AVERAGE VIEWS PER PRODUCT">
          <strong className="text-2xl font-normal">0</strong>
        </Card>
        <Card title="PRODUCT VIEWS">
          <strong className="text-2xl font-normal">0</strong>

          <LineChart
            style={{
              width: "90%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            className="float-right"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="views" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Card>
        <Card title="TOP CATEGORIES BY SALES">
          <strong className="text-2xl font-normal">0</strong>
          <div className="w-full h-full flex justify-center items-center">
            <small className="text-neutral-400 font-semibold">
              No enough data to show
            </small>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductsAnalytics;
