import React, {useState} from 'react'

function Parent() {
 
  const [value, setValue]= useState('')
  
  
 
    return (
    <div>
        <Child     />
    </div>
  )
}

export default Parent