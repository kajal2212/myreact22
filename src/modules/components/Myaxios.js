import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Myaxios() {
  const [svariable, sfunc] = useState([])

  const myapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((u) => {
      // console.log(u.data);
      sfunc(u.data);
    })
  }

  useEffect(()=>{
    myapi();
  },[]
  )
  return (
    <div>
      <button type='button' onClick={myapi}>get data</button>
      Myaxios
      <div className='container'>
        <div className='row'>
          
            {svariable.map((u) => {
              return (
                <div className='col-md-3 border' key={u.id}>
                <div className="m-2">
                 
                    <div className="card-body">
                    <h5 className="card-title">{u.id}</h5>
                      <h5 className="card-title">{u.title}</h5>
                      <p className="card-text">{u.userId}</p>
                      <a href="#" className="btn btn-primary">{u.completed === true ? "Yes" :"No"}</a>
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
