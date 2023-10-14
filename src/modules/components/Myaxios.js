import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Myaxios() {
  const [svariable, sfunc] = useState([])
  const [kk, sk] = useState([])
  const [pic, setpic] = useState([])

  const myapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((u) => {
      console.log(u.data);
      sfunc(u.data);
    })
  }

  const myapiconst=() =>{
    axios.get ("https://dummyjson.com/products").then((kaj)=>{
      console.log(kaj.data.products);
      sk(kaj.data.products);
      setpic(kaj.data.products[0].images);
      console.log(kaj.data.products[0].images);

    })
  }

  useEffect(()=>{
    myapi();
    myapiconst();
  },[])
  return (
    <div>
      <button type='button' onClick={myapi}>get data</button>
      Myaxios
      <div className='container'>
        <div className='row'>
          {pic.map((a,k)=>{
            return(
              <div className='col' key={k}>
                <img src={a} width={200}></img>

              </div>
            )
          }
          )}
          
            {svariable.map((u) => {
              return (
                <div className='col-md-3 border' key={u.id}>
                <div className="m-2">
                 
                    <div className="card-body">
                    <h5 className="card-title">{u.id}</h5>
                      <h5 className="card-title">{u.title}</h5>
                      <p className="card-text">{u.userId}</p>
                      <Link href="#" className="btn btn-primary">{u.completed === true ? "Yes" :"No"}</Link>
                      <Link to={`details/`+u.id}>view details</Link>
                    </div>
                </div>
                </div>



              )
            }
            )

            }

          </div>

        </div>

      </div>

   


  )
}
export default Myaxios
