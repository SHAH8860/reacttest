import React from 'react'

function Childcomponent() {
  return (
    <>
    <div className="d-flex">
          <div className="mb-3">
            <input
              type="number"
              className="form-control ms-3"
              id="exampleFormControlInput1" 
              placeholder='New price' 
              
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control ms-4"
              id="exampleFormControlInput2" 
            />
          </div>
    </div>

    </>
  )
}

export default Childcomponent