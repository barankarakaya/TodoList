import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos}) {
  return (
    <div className="todo-container">
        <ul className="todo-list">

            {todos.map((todo)=>(
                <Todo 
                    text={todo.text}
                    todo ={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}

                />
            ))}
           
        </ul>
    </div>
  )
}

export default TodoList