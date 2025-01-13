import {useState} from 'react'
import Create from './Create'
import { useEffect } from 'react'
import axios from 'axios'
import {BsCircleFill, BsFillTrashFill} from 'react-icons/bs'

const Home = () => {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
         axios.get('http://localhost:3000/get')
         .then(result=> setTodos(result.data))
         .catch(err=> console.log(err))
  },[])
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {
          todos.length===0 ?
          <div><h2>No Records</h2></div>:
          todos.map(todo=>(
            <div className='task'>
                <div className='checkbox'>
                <BsCircleFill className='icon'/>
                    <p>{todo.task}</p>
                 </div>
                 <div>
                      <span><BsFillTrashFill className='icon'/></span>
                 </div>
            </div>
          ))
        }
    </div>
  )
}

export default Home
