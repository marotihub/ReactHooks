import React,{useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount]=useState(0)
  
  const tick=()=>{
     setCount(prevCount => prevCount + 1);
     //because of prevCount function  no need to provide dependency it will work same
}
 useEffect(()=>{
  const interval= setInterval(tick, 1000)

  return ()=>{
      clearInterval(interval)
  }
 },[])
  
    return (
    <div>
     {count}
    </div>
  )
}

export default IntervalHookCounter