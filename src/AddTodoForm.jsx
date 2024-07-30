import React from "react";
import InputWithLabel from "./InputWithLabel";

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
          <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle} label="Title"/>
          <button type="submit">Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm