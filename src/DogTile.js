import React from "react";
import './DogtTle.css';
import DogDescription from "./DogDescription"


function DogFile(props){
    //const text = "Flowers"; 
   return (
   <div className="first">
        {/* <img src ="https://www.bing.com/th?id=OIP.HWD7TQZ_zTJzFcaVU7dbawHaDY&w=240&h=120&c=7&o=6&pid=SupCap "/> */}
        <img src={props.image}></img>
    <h3 style={{fontSize: '20px', color:'red'}}>{props.text}</h3>
    <DogDescription description = {props.description}/>
    {props.children}
   </div>
   )
}
export default DogFile;