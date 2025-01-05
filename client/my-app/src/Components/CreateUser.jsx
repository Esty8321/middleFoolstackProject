
import React, { useState ,useRef} from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from "axios";
import{InputText}from 'primereact/inputtext'

export default function CreateUser(props) {
    const [visible, setVisible] = useState(false);
   
    //create
    const name=useRef('')
    const phone=useRef('')
    const username=useRef('')
   const password=useRef('')
    const email=useRef('')
   const address=useRef('')
  
        
    const CreateUser = async () => {
        
       
        const objuser={
           name:name.current.value,
           phone:phone.current.value,
           username:username.current.value,
           email:email.current.value,
           password:password.current.value,
           address:address.current.value
          }
  
         const res=await axios.post('http://localhost:7000/user', objuser)
         try{
            if(res.status===200)
                props.setUsersData(res.data)
         }
         catch(e){}
           
        
      }
    return (
        <div className="card flex justify-content-center">
            <Button label="Create" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                       
                       <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               name
                            </label>
                            <InputText id="username"  ref={name}label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>


                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               username
                            </label>
                            <InputText id="username"  ref={username}label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                       

                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               email
                            </label>
                            <InputText id="username"  ref={email}label="email" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>


                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                              password
                            </label>
                            <InputText id="username"  ref={password}label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>


                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               address
                            </label>
                            <InputText id="password" ref={address} label="address" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               phone
                            </label>
                            <InputText id="password" ref={phone} label="phone" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>

                        <div className="flex align-items-center gap-2">
                            <Button label="Create" onClick={(e) => {hide(e);CreateUser()}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                        
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
        