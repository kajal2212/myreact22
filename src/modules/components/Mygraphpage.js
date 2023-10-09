import React, { Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { data } from './Mydata';



function Mygraphpage() {
  return (

<Fragment>
<div className='container border shadow mt-3 p-3'>
        <div className='row'>
          <div className='col-12 bg-dark'>
            
         
    <h1 className="text-danger text-center">This is Graph</h1>

<BarChart
      width={1200}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Bar dataKey="love" fill="red" />
      <Bar dataKey="ishq" fill="blue" />
      <Bar dataKey="mohb" fill="green" />
    </BarChart>
    </div>
    </div>
    </div>
    </Fragment>
  );
}
    
      
     
      
        
export default Mygraphpage
