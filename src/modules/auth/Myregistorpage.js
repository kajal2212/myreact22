import React from "react";

function Myregistorpage() {
    return (
        <div className="container page border mt-5 shadow p-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Registor Page</h1>
                </div>
            </div>
            <div className="row">
                <div class="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="col-md-6">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>


    )
}
export default Myregistorpage
