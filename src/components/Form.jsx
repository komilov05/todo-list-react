import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const Form = () => {
    const [value,setValue] = useState('')
    const {addTodo, todos} = useContext(TodoContext)

    function submitHandler(e){
        e.preventDefault()
        addTodo(value)

        setValue('')
    }

  return (
    <form onSubmit={submitHandler}>
            <input type="text" onChange={(event) => setValue(event.target.value)} value={value}/>
            <button>Add Todo</button>
    </form>
  )
}

export default Form