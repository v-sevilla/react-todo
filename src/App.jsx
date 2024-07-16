import { useState } from 'react'
import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {

  const [todoList, setTodoList] = useState([])

  const handleAddTodo = (todoTitle) => {
    const updatedList = [...todoList,{id:todoList.length +1, title:todoTitle}]
    setTodoList(updatedList)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo}/>
      <TodoList list={todoList} todoList={todoList}/>
    </div>
  );
}

export default App
