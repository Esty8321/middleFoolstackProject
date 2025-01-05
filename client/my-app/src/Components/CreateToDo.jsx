
import React, { useState ,useRef} from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import axios from "axios";
import{InputText}from 'primereact/inputtext'

export default function CreateToDo(props) {
    const [visible, setVisible] = useState(false);
    const title=useRef('')
    const tags=useRef('')
    //create
    const Create = async () => {
        const arr= (tags.current.value).split(',')
          const newToDo = {
             title:title.current.value,
             tags:arr
          }
  
         const res=await axios.post('http://localhost:7000/todos', newToDo)
         if(res.status===200)
            props.setToDosData(res.data)
        
          title.current.value=''
          tags.current.value=''
          
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
                                title
                            </label>
                            <InputText ref={title}id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                tags
                            </label>
                            <InputText id="password" ref={tags} label="text" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="text"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Create" onClick={(e) => {hide(e);Create()}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
        