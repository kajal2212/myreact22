import React, { Fragment } from 'react'
import Abcd from'../image/img2.jpg';

 function Myaboutpage() {
  return (
    <Fragment>
        <div>Myaboutpage</div>
        {/* src image import type */}
        <img src={Abcd} width="500" alt="abt pic"/>

    </Fragment>
    
  )
}
export default Myaboutpage


