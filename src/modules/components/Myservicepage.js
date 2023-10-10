import React from 'react'
import Mysidebar from '../shares/Mysidebar'
import { Outlet } from 'react-router-dom'

 function Myservicepage() {
//   return (
//     <div>Myservicepage</div>
//   )
return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
        <h1>service page</h1>
        </div>
    </div>
        <div className='row'>
        <div className='col-md-12'>
            <Mysidebar/>

        
        
        </div>
        </div>
        <div className='row'>
        <div className='col-md-12'>
            <h1>content page</h1>
            <Outlet></Outlet>

        </div>
        </div>
        </div>
     
  )
}
export default Myservicepage
