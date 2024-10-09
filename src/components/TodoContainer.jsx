import { useState, useEffect } from 'react'
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const TodoContainer = () => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const API_ENDPOINT = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`

  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      };
    
    try {
      const response = await fetch(API_ENDPOINT, options)
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json()
      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title,
        completedAt: todo.fields.completedAt
      }))
   
      const sortTodoTitleDesc = todos.sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        
        if (titleA < titleB) return 1;
        else if (titleA > titleB) return -1;
        return 0
      })

      setTodoList(sortTodoTitleDesc)
      setIsLoading(false)
    } 
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

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
      {isLoading ? (
        <p>Loading ...</p>
        ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>)
      }
    </>
  );
}

export default TodoContainer