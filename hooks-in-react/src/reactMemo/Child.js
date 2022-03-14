import React from 'react'

 function Child(prop) {
  console.log('child rendered')
    return (
    <div>child Name={prop.name}</div>
  )
}

export default  React.memo(Child);  //child will not re-render 

//react memo used for performance optimization