
import { useState } from "react";
import data from "./data";

import "./style.css";
console.log(data);
function Accordion(){
    let[quest,setquest]=useState(null);
   let [isshow,setisshow]=useState(false);
  
    let handler=(id)=>{
        console.log("its working");
        console.log(id);
        setquest(id===quest?null:id);
        
       
     

    }

    let all=()=>{
    setisshow(!isshow);
    console.log(isshow);
    }

    return(
        <div className="wrapper">
            <div className="accordion">
              <button onClick={all}>show all</button>
           {data.map((info)=> 
           <div className="item">
          <div className="title" onClick={()=>handler(info.id)}>
            <h2>{info.question}</h2>
           
            {isshow||quest===info.id?<span>*</span>:<span>+</span>}
        </div>
        {isshow||quest===info.id?(<div className="content">{info.answer}</div>):null}
           </div>
        )}
            </div>
        </div>
    )
}
export default Accordion;