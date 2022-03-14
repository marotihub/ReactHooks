import React,{useState} from 'react'
import Child from './Child'

export default function Parent() {
  const[value, setValue]=useState('')
    
  function handleChange(newValue){
      setValue(newValue)
      console.log(newValue)
  }
  return (
      //we pass callback to child
    <Child  value={value} onChangeInput={handleChange}   />
  )
}
