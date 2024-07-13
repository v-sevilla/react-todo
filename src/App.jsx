import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {

  const [newTodo, setNewTodo] = useState([
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
  ])

  const handleAddTodo = (todoTitle) => {
    const updatedList = [...newTodo,{id:newTodo.length +1, title:todoTitle}]
    setNewTodo(updatedList)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo}/>
      <TodoList list={newTodo}/>
    </div>
  );
}

export default App
