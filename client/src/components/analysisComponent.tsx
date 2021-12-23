import { h, Fragment } from "preact";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";

// const chartData = {
//   labels: ["1", "2", "3", "4", "5"],
//   datasets: [
//     {
//       title: "yes",
//       label: "# of Calls",
//       data: [10, 15, 25, 13, 28, 17],
//       fill: false,
//       backgroundColor: "rgba(202, 7, 46, 0.2)",
//       borderColor: "rgba(255, 99, 132, 0.2)",
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

const AnalysisComponent = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  let callDate: string[] = [];
  let callSum: number[] = [];

  const myChart = async () => {
    await axios
      .get("http://localhost:5001/api/analysis")
      .then((res) => {
        //console.log(res);
        for (const dataObj of res.data) {
          callDate.push(dataObj.date);
          callSum.push(parseInt(dataObj.sum));
        }

        setChartData({
          labels: callDate,
          datasets: [
            {
              label: "DAILY SALES",
              data: callSum,
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        });

        setChartOptions({
          scales: {
            y: {
              title: {
                display: true,
                text: "Dollars per sale ($)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date Ordered",
              },
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(callDate);
    //console.log(callSum);
  };

  useEffect(() => {
    myChart();
  }, []);

  return (
    <Fragment>
      <div class="box" id="box">
        <Line data={chartData} options={options} />
      </div>
    </Fragment>
  );
};

export { AnalysisComponent };
