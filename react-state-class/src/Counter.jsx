import { useState } from "react";

function init(){
    console.log("init was called")
    return Math.random()
}

export default function Counter() {
    let [count, setCount] = useState(init); //initialization
    console.log("component is re-rendered");
    // console.log(`count = ${count}`)   // re-render explaination

    let incCount = ()=>{
        // setCount(count+1)
        setCount((currCount)=>{
            return currCount+1
        })
        // setCount((currCount)=>{
        //     return currCount+1    // -----this how we use callback in our updational function
        // })    // this is case1 callback update
        // setCount(25)  // case2 in this value 25 is new it does not depend on any old vale
    } 
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}