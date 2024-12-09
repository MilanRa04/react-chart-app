import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Expenses, Profits",
        data: data.expenses.map((exp, index) => ({
          x: exp,
          y: data.profits[index],
          r: data.sales[index] / 10, // Scale bubble size
        })),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "Expenses" } },
      y: { title: { display: true, text: "Profits" } },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
