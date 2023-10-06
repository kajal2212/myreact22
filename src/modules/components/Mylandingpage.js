import React, { useState } from "react";

function Mylandingpage()
{
    const [svariable,sfunction]=useState(30)

    const myfunction = ()=>{
        alert("hey!welcome to react js");
        sfunction(5000);
    }
    const [dcolor,ccolor]=useState("red");
    const changeback =(p)=>{
        console.log(p.target.value);
       ccolor(p.target.value);

    }
    return(
        <div>
            <h1>Mylandingpage</h1>
            {/* public image import type */}
        <img src="photos/img.jfif" width="500" alt="public pix"/>
        <button type="button" onClick={myfunction} >alert function</button>
        <h1>display {svariable}</h1>

        <input type="color" onInput={changeback}/>
        <div style={{width:'500px',height:'500px',border:'3px solid black',backgroundColor:`${dcolor}`}}>changeback</div>
        </div>
    )
    }
export default Mylandingpage
