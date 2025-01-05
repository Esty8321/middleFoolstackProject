import axios from 'axios'
import UpdateToDo from './UpdateToDo'
import { Card } from 'primereact/card';

import { useState } from 'react'
import { Button } from 'primereact/button';
const ToDo=(props)=>{
  const [visible, setVisible] = useState(false);
  
    const deleteToDo=async(id)=>{
          const res=await axios.delete(`http://localhost:7000/todos/${id}`)
          if(res.status===200)
            props.setToDosData(res.data)
    }

  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
);

const footer=(
  <>{!props.todo.completed?<Button style={{width:'100px'}} label="no Completed" severity="secondary" onClick={()=>{completeToDo()}} outlined />:
   
  <Button label="Completed!" severity="success" rounded />}
  
   <Button  background='white' onClick={()=>deleteToDo(props.todo._id)}label="Delete" severity="danger" rounded />
   <Button label="Update"  onClick={() => setVisible(true)} />
     {visible?<UpdateToDo todo={props.todo} setToDosData={props.setToDosData} visible={visible}setVisible={setVisible}/>:<></>}
   <br/>
  </>
);
 

    const completeToDo=async()=>{
        const obj={
          id:props.todo._id,
          title:props.todo.title,
             tags:props.todo.title,
             completed:true
        }
        const res=await axios.put('http://localhost:7000/todos',obj)
        if(res)
          props.setToDosData(res.data)
        
    }
    return( <div className="card flex justify-content-center">
                  <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">

                  <p className="m-0">
    <p>title: {props.todo.title}</p>
    <p>tags:{props.todo.tags}</p>
 
   </p>
    </Card>
    </div>)
}
export default ToDo;
