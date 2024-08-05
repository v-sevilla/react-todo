import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {

  const [todoList, setTodoList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: {todoList: JSON.parse(localStorage.getItem("savedTodoList"))}})
      }, 2000)
    })
    .then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false)
    })
  })

  useEffect(() => {
    if (isLoading !== true) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList])

  const addTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo])
  }

  const removeTodo = (id) => {
    const filteredTodo = todoList.filter((todo) => todo.id !== id)
    setTodoList(filteredTodo)
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>
    </>
  );
}

export default App
