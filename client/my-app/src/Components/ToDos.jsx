import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import ToDo from "./Todo"
import CreateToDo from "./CreateToDo"

const ToDos = () => {
    const [toDosData, setToDosData] = useState([])
    
    const word=useRef('')
    
   
    //to get all the todos:
    const getToDos = async () => {
      
            const res = await axios.get('http://localhost:7000/todos')
            if (res.status === 200)
                {
                 
                  setToDosData((res.data).sort(

                  ))
                 
               }
    }
    ///

   //  if(word.current.value!='')
   //    {
   //       const arr=toDosData.map(todo=>todo.title.startsWith(word.current.value))
   //       setToDosData(arr)
   //    }
      

   useEffect(() => { getToDos() }, [])
    return (< >
       <div><CreateToDo setToDosData={setToDosData}/></div>
       {/* <input ref={word} placeholder="search"/> */}
       {toDosData.sort((a,b)=>a.title.localeCompare(b.title)).map(todo=>{return(
        <ToDo todo={todo} setToDosData={setToDosData}/>
       )})}
       
   </>)
    
}

export default ToDos;