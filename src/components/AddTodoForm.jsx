import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css'
import plusSign from "../assets/plusSign.svg"

const AddTodoForm = ({onAddTodo}) => {
  
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
    console.log(event)
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    }
    onAddTodo(newTodo)
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