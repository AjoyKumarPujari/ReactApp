import { useState } from "react";
// let x= 10;//global 
function Counter(){
     let x= 10;
    function updateX(){
        console.log("Updating X");
        x+=1;
        console.log(x);
    }
    const [count, setCount] = useState(10);
    return(
        <div className="counter">
                <span id="counterValue">X:{x}</span><br/>
                <span id="counterValue">Count:{count}</span><br/>
                <button onClick={updateX}>Click and update X</button><br/>
                <button onClick={ () => setCount(count+1)}>Click and update Count</button><br/>
        </div>
    )   
}
export default Counter;