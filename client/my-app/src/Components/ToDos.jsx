import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import ToDo from "./Todo"
import CreateToDo from "./CreateToDo"

const ToDos = () => {
    const [toDosData, setToDosData] = useState([])
    
    
    //to get all the todos:
    const getToDos = async () => {
      
            const res = await axios.get('http://localhost:7000/todos')
            if (res.status === 200)
                setToDosData(res.data)
    }
    ///

   useEffect(() => { getToDos() }, [])
    return (< >
       <div><CreateToDo setToDosData={setToDosData}/></div>
       
       {toDosData.map(todo=>{return(
        <ToDo todo={todo} setToDosData={setToDosData}/>
       )})}
       
   </>)
    
}

export default ToDos;