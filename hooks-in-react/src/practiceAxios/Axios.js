import axios from 'axios'
import React,{useEffect, useState} from 'react'

function Axios() {
 const[ posts, setPosts]= useState([])
 
   useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=> {
                setPosts(res.data)
                console.log(res.data)})
            .catch(err=> console.log(err))
   },[])

     return (
    <div>
        {
            posts.map((post)=><div keys={post.id}>Post title is:{post.title}</div>)
        }
    </div>
  )

}
export default Axios