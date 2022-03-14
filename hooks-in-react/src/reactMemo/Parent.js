import React,{useState} from 'react'
import Child from './Child'
function Parent() {
  const [count, setCount]= useState(0)
  console.log('parent rendered') 
  return (
   <> 
       <h2> Counter:{count} </h2>
        <Child name={'ABCD'}/>
        <button onClick={()=>{setCount(count +1)}}>Increment</button>
        </>
  )
}

export default Parent