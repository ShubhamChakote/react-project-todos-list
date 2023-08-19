import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0?  "no todos to display" : 
      
        props.todos.map((todos)=>{
          return <TodoItem todos={todos} key={todos.srno} onDelete={props.onDelete}/>
        
        })

      }
      
    </div>
  )
}
