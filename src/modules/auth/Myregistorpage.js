import React from "react";

function Myregistorpage() {
    return (
        <div className="container page border mt-5 shadow p-3 bg-danger">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Registor Page</h1>
                </div>
                <div class="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">username</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="your username" />
                </div>
                <div class="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="col-md-6">
                    <label for="exampleFormControlTextarea1" class="form-label">gender</label>
                    <select className="form-control" >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                   </select>
                </div>
               
                
                <div class="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="can be alphabet,numbers or special characters" />
                </div>
                <div class="col-12">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <div className='col-md-12 p-1 text-center'>
                    <button type='submit' className='btn btn-success'> Submit</button>
                    <button type='button' className='btn btn-danger ms-3'> Cancel</button>
                </div>




            </div>
        </div>



    )
}
export default Myregistorpage
