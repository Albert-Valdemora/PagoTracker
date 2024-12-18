import Chart from "chart.js/auto";
import { color } from "chart.js/helpers";
import { Bold, Weight } from "lucide-react";
import { Bar, Line } from "react-chartjs-2";

export const TotalCliente = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Inquilino",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Propietario",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pagos por mes",
        align: 'start',
        color: 'black',
        font: {
          size: 20,
          Weight: Bold,
        },
        padding: {
          top: 20,
          bottom: 20,
        }
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pagos por años",
        align: 'start',
        color: 'black',
        font: {
          size: 20,
          Weight: Bold,
        },
        padding: {
          top: 20,
          bottom: 20,
        }
      },
    },
  };

  return (
    <div className="grid grid-cols-4 gap-5 ">
      <div className="flex justify-center col-span-2  rounded-md shadow-lg shadow-[#aaaaaa] p-3">
        <Line data={data} options={options1} />
      </div>
      <div className="flex justify-center col-span-2  rounded-md  shadow-lg shadow-[#aaaaaa] p-3">
        <Bar data={data} options={options2} />
      </div>
    </div>
  );
};
