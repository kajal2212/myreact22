import React from "react";
import { increment, decrement,reset } from "./Myactions";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Reduxpage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <h1><span>{count}</span></h1>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </div>
    )
}
export default Reduxpage