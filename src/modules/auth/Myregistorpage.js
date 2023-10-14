import React from "react";
import {useForm} from 'react-hook-form';

function Myregistorpage() {
    const {register,handleSubmit, formState: { errors }} = useForm();

    const mysubmit=(alldata)=>{
        console.log(alldata);
    }
    return (
        <form onSubmit={handleSubmit(mysubmit)}>
        <div className="container page border mt-5 shadow p-3 bg-danger">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Registor Page</h1>
                </div>
                <div className="col-md-6">
                    <label for="exampleFormControlInput1" className="form-label">username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your username" {...register("name",{ required: true })} />
                    {errors.name && <span style={{color:'white'}}>full name is required</span>}
                </div>
                <div className="col-md-6">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register("email",{ required: true })} />
                    {errors.email && <span style={{color:'white'}}>email is required</span>}
                </div>
                <div className="col-md-6">
                    <label for="exampleFormControlTextarea1" className="form-label">gender</label>
                    <select className="form-control" {...register("gender",{ required: true })} >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                   </select>
                </div>
               
                
                <div className="col-md-6">
                    <label for="exampleFormControlInput1" className="form-label">password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="can be alphabet,numbers or special characters" {...register("pass",{ required: true,pattern: /^[A-Za-z]+$/i })}/>
                    {errors.pass && <span style={{color:'white'}}>password is required</span>}
                </div>
               
                <div className="col-md-6">
                    <label for="exampleFormControlTextarea1" className="form-label"> textarea</label>
                    <textarea className="form-control" defaultvalue="type text" rows="5" {...register("text",{ required: true,maxLength:20})}></textarea>
                    {errors.text && <span style={{color:'white'}}>remark is required</span>}
                </div>
                <div className="col-md-6">
                    <label for="exampleFormControlInput1" className="form-label">confirm password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" {...register("cpass",{ required: true})}/>
                    {errors.cpass && <span style={{color:'white'}}>password is required</span>}
                    {errors.pass===errors.cpass && <span style={{color:'white'}}>password does not match</span>}
                </div>
                <div className='col-md-12 p-1 text-center'>
                    <button type='submit' className='btn btn-success'> Submit</button>
                    <button type='button' className='btn btn-danger ms-3'> Cancel</button>
                </div>

                


            </div>
        </div>
        </form>



    )
}
export default Myregistorpage
