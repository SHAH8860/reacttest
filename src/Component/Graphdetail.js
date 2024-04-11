import React from "react";
import { CiHome } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BsExclamationOctagon } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import Graph from "./Graph";
import "../Style/Graphdetail.css";
function Graphdetail() {
  return (
    <>
      <div className="conainer mt-5">
        <div className="row">
          <div className="col-9 border">
            <div class="d-flex justify-content-between">
              <div className="d-flex">
                <div className="box ">
                  <CiHome />
                </div>
                <div className="box">1Y</div>
                <div className="box">2Y</div>
                <div className="box">5Y</div>
                <div className="box">10Y</div>
                <div className="box">All</div>
              </div>
              <div className="d-flex">
                <div className="box1">Update</div>
                <div className="box">
                  <FaRegBell />
                </div>
                <div className="box">
                  <FaPlus />
                </div>
                <div className="box">
                  <BsExclamationOctagon />
                </div>
                <div className="box">
                  <GrNotes />
                </div>
                <div className="box">
                  <CiFilter />
                </div>
              </div>
            </div>
            <div className="container">
              <Graph />
            </div>
          </div>
          <div className="col-3 border">
            <div className="row  ammount mt-5">
              <div className="data">
                <div>
                  <h5>1670.00</h5>
                </div>
                <div>
                  <p>
                    USD/MT <br></br>
                    INDONESIA
                  </p>
                </div>
              </div>
            </div>
            <div className="row second m-4">
              <div className="detail mt-3">
                <p className="text-secondary">%W-o-W Change</p>
                <div className="d-flex">
                  <h3>N/A</h3>
                  <h6 className="mt-3 ms-5">N/A</h6>
                </div>
              </div>
              <div className="detail mt-3">
                <p  className="text-secondary">%M-o-M Change</p>
                <div className="d-flex">
                  <h3>13.61%</h3>
                  <h6 className="mt-3 ms-5">1470.00</h6>
                </div>
              </div>
              <div className="detail mt-3">
                <p  className="text-secondary">%Q-o-Q Change</p>
                <div className="d-flex">
                  <h3>27.48%</h3>
                  <h6 className="mt-3 ms-5">1310.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphdetail;
