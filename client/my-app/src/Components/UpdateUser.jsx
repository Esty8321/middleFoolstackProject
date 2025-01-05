
import React, { useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import{InputText}from 'primereact/inputtext'
import axios from "axios";

export default function UpdateUser(props) {
  
    const name=useRef('')
    const phone=useRef('')
    const username=useRef('')
   
    const email=useRef('')
   const address=useRef('')
    const UpdateUser=async()=>{
       
        const objuser={
          id:props.user._id,
         name:name.current.value,
         phone:phone.current.value,
         username:username.current.value,
        
         email:email.current.value
        }
        const res=await axios.put('http://localhost:7000/user',objuser)

        if(res.status==200)
          props.setUsersData(res.data)  
  }
  
    return (
        <span className="card flex justify-content-center">
        
           
            <Dialog
                visible={props.visible}
                modal
                onHide={() => {if (!props.visible) return; props.setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                       
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               name
                            </label>
                            <InputText id="username"  ref={name}label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
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
                            <InputText id="username"  ref={email}label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               address
                            </label>
                            <InputText id="password" ref={address} label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                               phone
                            </label>
                            <InputText id="password" ref={phone} label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Update" onClick={(e) => {hide(e);UpdateUser()} } text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        
                        </div>
                    </div>
                )}
            ></Dialog>
       </span>
    )
}
        