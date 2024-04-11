import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Graph from "./Graph";
import { useNavigate } from "react-router-dom";
function Listofgraph() {
  const navigate=useNavigate()
  const handlenavigation=()=>{
    navigate('/detail')
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-end">
              <div>
                <button className="btn btn-primary" onClick={handlenavigation}>
                  <FaEye />
                  <span className="ms-1">View</span>
                </button> 
              </div>
              <div>
                <button className="btn btn-danger ms-2 ">
                  <FaTrash />
                </button>
              </div>
            </div>
            <Graph/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listofgraph;
