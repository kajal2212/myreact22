import React from 'react';
import axios from 'axios';


 function Myaxios() {
    const myapi = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((u)=>{
            console.log(u);
        })
    }
  return (
    <div>Myaxios</div>
  )
}
export default Myaxios
