
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import ReactDom from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts'
import ToDos from './ToDos'

export default function NavBar() {
    const startContent = (
      <></>
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
          
                <Link to='/users'>users     </Link>
           
                <Link to='/todos'>todos      </Link>
           
                <Link to='/posts'>posts        </Link>
             
        </div>
    );

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50">Esty Margi</span>
            </div>
        </React.Fragment>
    );

    return (
        <div className="card">
         <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
      
        <Routes>
           <Route path='/users' element={<Users/>}/>
           <Route path='/posts' element={<Posts/>}/>
           <Route path='/todos'element={<ToDos/>}/>
        </Routes>
        </div>

    );
}
        