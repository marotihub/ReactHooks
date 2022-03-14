import React,{useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
  const [posts, setPosts]= useState([])

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=> {              // axios return promise 
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err=> console.log(err))     
  },[])
    return (
    <div>
      <ul> {
             posts.map(post => <li key={post.id}>{post.title}</li>)
          }
          
          </ul>  
    </div>
  )
}

export default DataFetching