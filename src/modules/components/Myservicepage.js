import React from 'react'
import Mysidebar from '../shares/Mysidebar'
import { Outlet } from 'react-router-dom'

function Myservicepage() {
    //   return (
    //     <div>Myservicepage</div>
    //   )
    return (
        <div className='container-fluid page mt-3'>
            <div className='row'>
                <div className='col-md-12 border'>
                    <h1>service page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <Mysidebar/>
                    </div>
                    <div className='col-md-10'>
                        <div className='border p-2'>
                    <h1>content page</h1>
                    <Outlet></Outlet>

                </div>
                </div>
            </div>
        </div>

    )
}
export default Myservicepage




               


                