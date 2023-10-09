import React, { Fragment } from 'react'
import Abcd from'../image/img2.jpg';
const mydata = [10,20,30,40,50,60]

 function Myaboutpage() {
  return (
    <Fragment>
        <div>Myaboutpage</div>
        {/* src image import type */}
        <img src={Abcd} width="500" alt="abt pic"/>

        {mydata.map((d)=>{
          return(
            <h4>this is kajal: {d}</h4>
          )
        })}

        <select>
        {mydata.map((d)=>{
          return(
            <option id={d}>this:{d}</option>
          )
        })}

        </select>

    </Fragment>
    
  )
}
export default Myaboutpage


