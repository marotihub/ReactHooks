import React,{useState} from 'react'

export default function StatePrevState() {
 const initialCount= 0;
 const[count, setCount]= useState(initialCount)
    
const IncrementBy5=()=>{
    for(let i= 0; i<5; i++){
        setCount(prevState=> prevState + 1)
    }
}
 return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevState=> prevState + 1)}>Increment</button>
        <button onClick={()=>setCount(prevState=> prevState - 1)}>Decrement</button>
        <button onClick={IncrementBy5}>Increment by 5</button>
    </div>
  )
}
