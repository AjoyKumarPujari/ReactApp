import { useState } from "react";
// let x= 10;//global 
function Counter(){
     let x= 10;
    function updateX(){
        console.log("Updating X");
        x+=1;
        console.log(x);
    }
    const [y, setY] = useState(10);
    const [count, setCount] = useState(10);
    const [text, setText] = useState("");
    return(
        <div className="counter">
                <span id="counterValue">X:{x}</span><br/>
                <span id="counterValue">Count:{count}</span><br/>
                <span id="counterValue">Y:{y}</span><br/>
                <button onClick={updateX}>Click and update X</button><br/> 
                <button onClick={ () => setCount(count+1)}>Click and update Count</button><br/>
                <button onClick={ () => setY(count+1)}>Click and update Count</button><br/>
                <input type="text" onChange={ (event) => setText(event.target.value)}></input><br/>
                <span>{text}</span><br/>
        </div>
    )   
}
export default Counter;