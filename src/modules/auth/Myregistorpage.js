import React from "react";

function Myregistorpage() {
    return (
        <div classnameName="container page border mt-5 shadow p-3">
            <div classnameName="row">
                <div classnameName="col-12">
                    <h1 classnameName="text-center">Registor Page</h1>
                </div>
            </div>
            <div classnameName="row">
           <div classname="col-md-6">
                    <label for="exampleFormControlInput1" classname="form-label">username</label>
                    <input type="text" classname="form-control" id="exampleFormControlInput1" placeholder="your username" />
                </div>
                <div classname="col-md-6">
                    <label for="exampleFormControlInput1" classname="form-label">Email address</label>
                    <input type="email" classname="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div classname="col-md-6">
                    <label for="exampleFormControlTextarea1" classname="form-label">Example textarea</label>
                    <textarea classname="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div classname="col-md-6">
                    <label for="exampleFormControlInput1" classname="form-label">password</label>
                    <input type="password" classname="form-control" id="exampleFormControlInput1" placeholder="can be alphabet,numbers or special characters" />

                </div>
                <div classname="col-md-6">
                    <label for="exampleFormControlInput1" classname="form-label">phone no</label>
                    <input type="text" classname="form-control" id="exampleFormControlInput1" placeholder="maximum of 10 digits" />

                </div>
                

            
            </div>
        </div>


    )
}
export default Myregistorpage
