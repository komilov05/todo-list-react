import React, {useContext} from 'react'
import { TodoContext } from './context/TodoContext'
import Form  from "./components/Form";
import List  from "./components/List";

import './App.css'

function App() {
  const store = useContext(TodoContext)

  return (
    <div className="App">
      <Form/>
      <List/>
    </div>
  )
}

export default App
