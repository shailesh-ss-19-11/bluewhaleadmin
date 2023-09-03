import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "#886CC0",
      borderWidth: "2",
      backgroundColor: "transparent",
      pointBackgroundColor: "#886CC0",
    },
    {
      label: "My First dataset",
      data: [5, 20, 15, 41, 35, 65, 80],
      borderColor: "#ffcf6d",
      borderWidth: "2",
      backgroundColor: "transparent",
      pointBackgroundColor: "#ffcf6d",
    },
  ],
};

const options = {
  legend: false,
  tooltips: {
    intersect: false,
  },
  hover: {
    // mode: "nearest",
    intersect: true,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 10,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          padding: 5,
        },
      },
    ],
  },
};
class DualLine extends Component {
  render() {
    return <Line data={data} options={options} height={150} />;
  }
}

export default DualLine;
