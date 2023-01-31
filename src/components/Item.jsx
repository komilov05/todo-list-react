import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Item = () => {
    const { todos,deleteTodo } = useContext(TodoContext)
    return (
        todos.map(todo => {
            return(
                <div className='d-flex'>
                    <li key={todo.id}>{todo.title}</li>
                    <div className='d-flex'> 
                        <input onChange={() => handleChange(todo.id)} type="checkbox"  />
                        <button className='border' onClick={() => deleteTodo(todo.id)}>delete</button>
                    </div>
                </div>
            )
        })
  )
}

export default Item