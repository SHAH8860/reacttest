import React from 'react'
import { Line } from "react-chartjs-2";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  return (
    <>
    <div className="container">
    <div className="d-flex justify-content-between mt-3">
              <div className="text">
                <h2 className="card-title text-primary">Crude Palm Oil</h2>
                <h6 className='text-secondary'>Curde Palm Oil|USD/MT|Indonesia</h6>
              </div>
              <div className="logo d-flex">
                <CiCirclePlus size={"2em"} />
                <CiCircleMinus size={"2em"} />
                <div className="dropdown">
                  <IoReorderThreeOutline size={"2em"} className="dropdown-toggle" data-bs-toggle="dropdown" />
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>Download SVG</li>
                    <li>Download Png</li>
                    <li>Downloag CSV</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="chart">
              <Line
                data={{
                  // x-axis label values
                  labels: [
                    "Jul 18",
                    "2019",
                    "Jul 19",
                    "2020",
                    "Jul 20",
                    "2021",
                    "Jul 21",
                    "2022"

                  ],
                  datasets: [
                    {
                      label: "Curde Palm Oil(Indonesia,Spot FD,USD/MT)",
                      data: [-1250,-750,-250,250,750,12501750],
                      fill: false,
                      borderWidth: 2,
                      backgroundColor: "rgb(255, 99, 132)",
                      borderColor: "green",
                      responsive: true,
                    },
                  ],
                }}
              />
            </div>
    </div>
    </>
  )
}

export default Graph
