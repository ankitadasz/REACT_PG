import React , {useState} from "react";

const Counter = ()=> {
    const [num,setNum]=useState(0);
    // const [value,setValue]=useState("Even");
    return (
        <div>
            <p>Number-{num}</p>
            <button onClick={()=>setNum(num+1)}>Increment</button>
            <button onClick={()=>setNum(num-1)}>Decrement</button>
            <button>Check</button>

        </div>
    )
}
export default Counter; 