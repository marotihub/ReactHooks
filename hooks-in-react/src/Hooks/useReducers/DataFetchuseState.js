import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchuseState() {
 
 const [loading, setLoading]=useState(true);
 const [post, setPost]= useState({})
 const [error, setError]= useState('')
 //for sideEffect we used useEffect hook 
 useEffect(()=>{
   axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> {
         setLoading(false),
            setError(''),
            setPost(response.data) 
        })
        .catch(error=>{
            setLoading(false),
            setError('Something went wrong'),
            setPost({})
        })
 },[])
 
    return (
    <div>
        {loading ? "Loading" : post.body  }
        {error ? error :null}
    </div>
  )
}

export default DataFetchuseState