import axios from 'axios';

export const fetchTodoList = (setTodos) => {
    axios.get('http://localhost:3000/todos')
          .then((response) => setTodos(response.data))
          .catch(error=>console.error(error))
  }

export const createTodo = (todoData, setTodos, todos) => {
    axios.post('http://localhost:3000/todos', todoData)
            .then(response => setTodos([...todos, response.data]))
            .catch(error => console.error(error))
}

export const deleteTodo = (id, setTodos, todos) => {
    axios.post('http://localhost:3000/todos', { params: { id: id } })
            .then((response) => {
                
                const updatedTodos = todos.filter(todo => todo.id !== id)
                setTodos(updatedTodos)
            })
            .catch(error => console.error(error))
}