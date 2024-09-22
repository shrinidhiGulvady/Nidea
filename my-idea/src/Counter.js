import React, { useEffect, useState} from 'react';

const Counter=()=>{
const [counter, setCounter]=useState(0)

useEffect(()=>{
    myInterval()
},[counter])

const myInterval = ()=>{
    setInterval(()=>{setCounter(counter+1)}, 1000);
}
    return <div>
        {counter}
        <button >Hello</button>
        <button  >Run</button>
        <button onClick={clearInterval(myInterval)} >Stop</button>
    </div>
}

export default Counter;