import React,{useState,useEffect} from 'react'

function HookCounterOne() {
const [count, setCount]= useState(0)
const [text, setText]= useState('')

useEffect(()=>{
    document.title = ` You clicked ${count} times`
    console.log('Updating the document title')

}, [count])
//because of second param [count ] the useEffect function call only when count value changes


  return (
    <div>
        <input type='text' value={text} onChange={e=> setText(e.target.value)} />
        <button onClick={()=>setCount(count + 1)}>count: {count}</button>
    </div>
  )
}

export default HookCounterOne