import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import User from "./User"
import CreateUser from "./CreateUser"

const Users = () => {
    const [usersData, setUsersData] = useState([])
    
    
    //to get all the todos:
    const getUser = async () => {
      
            const res = await axios.get('http://localhost:7000/user')
            if (res.status === 200)
                setUsersData(res.data)
    }
    ///

   useEffect(() => { getUser() }, [])
    return (< >
       <div><CreateUser  setUsersData={setUsersData}/></div>
       
       {usersData?usersData.map(user=>{return(
        <User user={user} setUsersData={setUsersData}/>
       )}):<></>}
       
   </>)
    
}

export default Users;