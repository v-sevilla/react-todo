import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {

  const todoList = [
    {
      id: 1,
      title: "Submit weekly assignment"
    },
    {
      id: 2,
      title: "Add Javascript functionality to website"
    },
    {
      id: 3,
      title: "Create vinyl design"
    }
  ]

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList list={todoList}/>
    </div>
  );
}

export default App
