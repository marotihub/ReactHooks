import React, {useState} from 'react'

function UseStateArray() {
 const [items,setItems]= useState([])
  
 const addItem=()=>{
     setItems([...items, {
         id: items.length,
         value: Math.floor(Math.random())
     }])
 }
    return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>{ 
              items.map((item)=>{
            <li key={item.id}>{item.value} value</li>
            
                })
            }
        </ul>
    </div>
  )
}

export default UseStateArray