import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productdetails() {
 const {id} = useParams();
//  console.log(id);
 const[singledata,singlefun]=useState({})
 const mysingledata = ()=>{
  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((u)=>{
    // console.log(u.data);
    singlefun(u.data);
  }
  )
 }
 useEffect(()=>{
  mysingledata();
},[])
return (
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
      <h1>ProductDetails</h1>
      <h2>{singledata.id}</h2>
      <h2>{singledata.title}</h2>
      <h2>{singledata.userId}</h2>
      </div>
    </div>
  </div>
)
}

export default Productdetails
