import React,{useState,useEffect, useRef} from 'react'
// usecase of useRef Hook to clear setInterval
function HookTimer() {
  const [timer, setTimer]=useState(0)
  const intervalRef= useRef()

  useEffect(()=>{
 intervalRef.current= setInterval(()=> {
    setTimer(prevTimer => prevTimer +1)
}, 1000)
return ()=>{
    clearInterval(intervalRef.current)
    console.log('clearInterval')
};
  },[])
  
    return (
    <div>
  Hook Timer -{timer}
  <button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer