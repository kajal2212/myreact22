import React from "react";

function Myloginpage() {
    return (
        <div className="container-fluid page ">
            <div className="row">
                <div className="col-12">
                    
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9C5pmjtS4MSaNqyMXihBxlOLQopaaONPMPQ&usqp=CAU" class="img-fluid" alt="login"
                        style={{ width: '800px', height: '600px', marginLeft: '340px', marginTop: '10px',opacity:'0.8' }}></img>
                        <div className="position-absolute bottom-0">
                         
                    <div className="mb-3"  style={{marginLeft:'650px',marginTop:'-500px',fontWeight:'bolder',fontSize:'25px'}}>
                        <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        
                    </div>
                    <div className="mb-3" style={{width:'320px',marginLeft:'650px' ,fontWeight:'bolder',fontSize:'25px'}}>
                        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlTextarea1" placeholder="must be a strong one"  />
                    </div>
                    <button type="button" class="btn btn-danger" style={{marginLeft:'750px',marginTop:'20px'}}>login</button>
                
                    </div>

                    


                </div>

            </div>

        </div>
    )
}
export default Myloginpage
