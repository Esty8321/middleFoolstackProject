import axios from 'axios'
import UpdateUser from './UpdateUser'
import { useState } from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const User=(props)=>{
 
  const [visible, setVisible] = useState(false);
  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
);
const footer=(<><Button  background='white' onClick={()=>deleteUser(props.user._id)}label="Delete" severity="danger" rounded />
<Button label="Update"  onClick={() => setVisible(true)} />
 
  {visible?<UpdateUser user={props.user} setUsersData={props.setUsersData} visible={visible}setVisible={setVisible}/>:<></>}</>);
    const deleteUser=async(id)=>{
          const res=await axios.delete(`http://localhost:7000/user/${id}`)
          if(res.status===200)
            props.setUsersData(res.data)
    }

   
    return(<div className="card flex justify-content-center">
      <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
      <p className="m-0">

    <p>name: {props.user.name}</p>
    <p>phone:{props.user.phone}</p>
    <p>email: {props.user.email}</p>
    <p>addres: {props.user.address}</p>
    </p>
    </Card>
    </div>)
}
export default User;
