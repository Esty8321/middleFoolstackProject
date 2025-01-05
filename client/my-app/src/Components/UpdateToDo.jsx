
import React, { useState,useRef } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import{InputText}from 'primereact/inputtext'
import axios from "axios";

export default function UpdateToDo(props) {
  
    const title=useRef('')
    const tags=useRef('')

    const Update=async()=>{
        const arr= (tags.current.value).split(',')
        const objTodo={
          id:props.todo._id,
          title:title.current.value,
          completed:props.todo.completed,
          tags:arr
  
        }
        const res=await axios.put('http://localhost:7000/todos',objTodo)

        if(res.status==200)
          props.setToDosData(res.data)  
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
                               title
                            </label>
                            <InputText id="username"  ref={title}label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label style={{fontcocolor:"red"}}htmlFor="username" className="text-primary-50 font-semibold">
                                tags
                            </label>
                            <InputText id="password" ref={tags} label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Update" onClick={(e) => {hide(e);Update()} } text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        
                        </div>
                    </div>
                )}
            ></Dialog>
       </span>
    )
}
        