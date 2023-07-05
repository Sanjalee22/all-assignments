import React, { useEffect, useState } from 'react'
import './App.css'
import { createTodo, deleteTodo, fetchTodoList } from './apis';

function App() {
  
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    fetchTodoList(setTodos)
  }, [])

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
      
      </div>
      <TodoCreator todos={todos} setTodos={setTodos}/>
      <Todo todos={todos}/>
    </>
  )
}

const TodoCreator = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    //call post API 
    createTodo({title, description}, props.setTodos, props.todos)

    //clear the text input fields
    setTitle('')
    setDescription('')

  }
return(
  <form onSubmit={handleSubmit}>
  <div>
    <label>Title:</label>
    <input type="text" value={title} onChange={handleTitleChange} />
  </div>
  <div>
    <label>Description:</label>
    <input type="text" value={description} onChange={handleDescriptionChange} />
  </div>
  <button type="submit">Create</button>
</form>
)

} 

const Todo = (props) => {

  const todoList = () => {
    return props.todos.map((todo)=>{
      return <div key = {todo.id}>
        <span>{`${todo.title}: `}</span>
        <span>{todo.description}</span>
        <button onClick = {deleteTodo}>Delete</button>
      </div>
    })
  }

    // Add a delete button here so user can delete a TODO.
    return <div>
      <h3>todo list</h3>
      {todoList()}
    </div>
}

export default App
