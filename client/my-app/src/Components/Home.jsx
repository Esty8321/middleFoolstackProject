import ReactDom from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts'
import ToDos from './ToDos'
import { useNavigate } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
const Home=()=>{

    const navigate = useNavigate()
  const items = [{
    label: 'Users',
    icon: 'pi pi-user',
    command: () => { navigate('./users') }
},
{
    label: 'Posts',
    icon: 'pi pi-file',
    command: () => { navigate('./posts') }
},
{
    label: 'Todos',
    icon: 'pi pi-list-check',
    command: () => { navigate('./todos') }
}
]

    return(
      <div>
        <Menubar model={items} style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-200 ), var(--bluegray-500))' }}/>
        <Routes>
           <Route path='/users' element={<Users/>}/>
           <Route path='/posts' element={<Posts/>}/>
           <Route path='/todos'element={<ToDos/>}/>
        </Routes>
      </div>  
        
    )
}
export default Home;