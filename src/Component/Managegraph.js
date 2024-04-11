import React, {  useState } from "react";
import Childcomponent from "./Childcomponent";
import Listofgraph from "./Listofgraph";

function Managegraph() {
  const [data, setdata] = useState({
    type: "",
    description: "",
  });
  const [component,setcomponent]=useState([])
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    
    
  }
  const addcomponent=()=>{
    setcomponent([...component, <Childcomponent key={component.length} />]);
  }
  
  return (
    <>
      <form>
      <div className="container border">
        <div className="d-flex justify-content-between border">
          <div>
            <h2 className="mt-2">Manage Product Price Trends</h2>
          </div>
          <div>
            <button type="button" className="btn btn-primary m-2" onClick={addcomponent}>Add Change</button>
          </div>
        </div>
        <div className="d-flex justify-content-around m-2">
          <div className="mb-3 flex-grow-1 m-2">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="special type"
              name="type"
              value={data.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 flex-grow-1 m-2">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Short Description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          {
            component&&
            component.map((val,index)=>{
              return(
                <div key={index}>{val}</div>
              )
            })
          }
        </div>
        <div>
          <Listofgraph/>
        </div>
      </div>
      </form> 
      
    </>
  );
}

export default Managegraph;
