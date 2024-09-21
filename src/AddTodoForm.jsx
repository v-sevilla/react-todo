import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css'
import plusSign from "./assets/plusSign.svg"

const AddTodoForm = ({onAddTodo}) => {
  
  const [todoTitle, setTodoTitle] = React.useState('');

  const postTodo = async (newTodo) => {
    try {
      const newTitle = {
        fields: {
          id: newTodo.id,
          title: newTodo.title
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
      return dataResponse;
    } 
    catch (error) {
      console.log(error.message);
      return null;
    }
  }

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
    console.log(event)
  }

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoTitle,
    }
    onAddTodo(newTodo)
    await postTodo(newTodo)
    setTodoTitle("")
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>Title:</InputWithLabel>
        <button type="submit"><img className={style.plusSignIcon} src={plusSign}></img></button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm