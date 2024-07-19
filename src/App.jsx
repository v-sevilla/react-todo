import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    localStorage.setItem("savedTodoList", (todoList))
  }, [todoList])


  const addTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App
