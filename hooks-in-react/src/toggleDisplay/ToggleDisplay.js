import React, { useState } from 'react'

function ToggleDisplay() {

 const[show,setShow]=useState(true)
    return (
    <div>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {
            show? <h1>Good Morning</h1>: null
        }
    </div>
  )
}

export default ToggleDisplay