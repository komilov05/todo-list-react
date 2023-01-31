import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Item from './Item'

const List = () => {
  return (
    <ul>
        <Item/>

    </ul>
  )
}

export default List