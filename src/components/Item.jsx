import React, { useContext ,useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const Item = () => {
    const { todos,deleteTodo } = useContext(TodoContext)
    const [checked, setCheked] = useState(false)
    console.log(checked)
    return (
        todos.map(todo => {
            return(
                <div className='d-flex'>
                    <li className={"" + (checked ? "selected" : "") } key={todo.id}>{todo.title}</li>
                    <div className='d-flex'> 
                        <input onChange={(e)=> setCheked(e.target.checked)} type="checkbox"  />
                        <button className='border' onClick={() => deleteTodo(todo.id)}>delete</button>
                    </div>
                </div>
            )
        })
  )
}

export default Item