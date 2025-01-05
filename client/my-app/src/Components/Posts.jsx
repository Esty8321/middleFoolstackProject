import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import Post from "./Post"
import CreatePost from "./CreatePost"

const Posts = () => {
    const [postsData, setPostsData] = useState([])
    
    
    //to get all the todos:
    const getPost = async () => {
      
            const res = await axios.get('http://localhost:7000/post')
            if (res.status === 200)
                setPostsData(res.data)
    }
    ///

   useEffect(() => { getPost() }, [])
    return (< >
       <div><CreatePost setPostsData={setPostsData}/></div>
       
       {postsData.map(post=>{return(
        <Post post={post} setPostsData={setPostsData}/>
       )})}
       
   </>)
    
}

export default Posts;