import axios from 'axios'
import UpdatePost from './UpdatePost'
import { useState } from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
const Post=(props)=>{
 
  const [visible, setVisible] = useState(false);
  
    const deletePost=async(id)=>{
          const res=await axios.delete(`http://localhost:7000/post/${id}`)
          if(res.status===200)
            props.setPostsData(res.data)
    }

   const header=(<img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
   );

   const footer=(<><Button  background='white' onClick={()=>deletePost(props.post._id)}label="Delete" severity="danger" rounded />
    <Button label="Update"  onClick={() => setVisible(true)} />
    {visible?<UpdatePost post={props.post} setPostsData={props.setPostsData} visible={visible}setVisible={setVisible}/>:<></>}
</>);
    return(
    <div className="card flex justify-content-center">

      <Card  title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
       <p className="m-0">
        <p>title: {props.post.title}</p>
         <p>body:{props.post.body}</p> 
     </p>
      </Card>
       </div>
    )
}
export default Post;
