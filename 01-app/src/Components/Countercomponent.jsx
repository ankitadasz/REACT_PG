import React , {useState} from "react";

const Counter = ()=> {
    const [num,setNum]=useState(0);
    return (
        <div>
            <p>Number-{num}</p>
            <h6>Number is {num%2===0 ? "EVEN" : "ODD"}</h6>
            <button onClick={()=>setNum(num+1)}>Increment</button>
            <button onClick={()=>setNum(num-1)}>Decrement</button>
            <button>Check</button>

        </div>
    )
}
export default Counter; 