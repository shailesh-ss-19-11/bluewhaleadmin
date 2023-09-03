import React, { Component } from "react";
import { Polar } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [6, 18, 15, 9, 19],
         borderWidth: 0,
         backgroundColor: [
            "rgba(91, 207, 193,1)",
            "rgba(112, 159, 186, 1)",
            "rgba(136, 108, 198, 1)",
            "rgba(54, 147, 255, 1)",
            "rgba(255, 92, 0, 1)",
         ],
      },
   ],
};

const options = {
   responsive: true,
   maintainAspectRatio: false,
};
class PolarChart extends Component {
   render() {
      return <Polar data={data} options={options} height={150} />;
   }
}

export default PolarChart;
