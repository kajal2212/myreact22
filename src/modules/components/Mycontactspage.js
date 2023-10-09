import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { mydata } from './Mydata'

function Mycontactspage() {
  return (
    // <div>Mycontactspage</div>
    // card design
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2>total users:
            {mydata.length}</h2>

        </div>
        {/* //       {<div className="card text-bg-warning mb-3">
    //         <div className="card-header">
    //           header
    //         </div>
    //         <div className="card-body">
    //           <h5 className="card-title">Special title treatment</h5>
    //           <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //           <Link href="#" className="btn btn-primary">Go somewhere</Link>
    //         </div>
    //       </div>} */}


        {/* {mydata.map((d)=>{
    return(
      
      <h1>Name is:{d.name}</h1>
     
    )
  }
  )} */}
        {mydata.map((d) => {
          return (


            <div className='col-md-3'>

              <div className="card text-bg-dark mb-3">
                <img src={d.myimg} className='rounded-circle' />
                <h2 className='text-center'>name of users</h2>
              </div>
              </div>
              )

  }
  )}


            

    </div>

    </div>


  )
}
export default Mycontactspage

