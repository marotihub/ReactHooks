import React,{useEffect, useState} from 'react'

function HookCounterTwo() {
 const[x, setX]= useState()
 const[y, setY]=useState()
    
 const mousePosition=(e)=>{
    console.log("Mouse effect called") 
    setX(e.clientX);
     setY(e.clientY)
 }
 useEffect(()=>{
     console.log("useEffect called");
     window.addEventListener('mousemove', mousePosition)

//useEffect return a function and this function will unmount component
return ()=>{
    console.log('component Unmounted ')
    window.removeEventListener('mousemove', mousePosition)
}

 },[])
    return (
    <div>
    X- {x}  Y-{y}
    </div>
  )
}

export default HookCounterTwo