import { createContext, useState } from "react";



  export const TodoContext = createContext(
    {   
        todos:[],
        addTodo: (title) => {},
        deleteTodo: (id) => {}
    }
)

function TodoProvider(props) {
    const [todos, setTodos] = useState([])

    function addTodo(title){
       const newTodo = 
        {
            title,
            id:Date.now(),
            status:false
        }
       
       return setTodos([newTodo,...todos ])
    }

    function deleteTodo (id){
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    return(
        <TodoContext.Provider value={ 
        {   todos,
            addTodo,
            deleteTodo
            } 
            }>

            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoProvider