import { useState, useEffect } from 'react'
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const TodoContainer = () => {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const API_ENDPOINT = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`

  const postTodo = async (todo) => {
    try {
      const newTitle = {
        fields: {
          id: todo.id,
          title: todo.title
        }
      }
    
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          },
          body: JSON.stringify(newTitle),
        }
      );

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      const newTodo = {
        title: dataResponse.fields.title,
        id: dataResponse.fields.id,
      }
      return newTodo;
    } 
    catch (error) {
      console.log(error.message);
      return null
    }
  }
  
  const deleteTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch (
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default/${id}`, options)

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      if (!data.deleted) {
        throw new Error("Todo not deleted");
      }
      return id
    } 
    catch (error) {
      console.log(error.message);
      return null;
    }
  }

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

  const addTodo = async (newTodo) => {
    const addNewTodo = await postTodo(newTodo)
    setTodoList((previousTodoList) => [...previousTodoList, addNewTodo])
  }

  const removeTodo = async (id) => {
    const filteredTodo = await deleteTodo(id)
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== filteredTodo));
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