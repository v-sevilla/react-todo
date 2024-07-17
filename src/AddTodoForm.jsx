import React from "react";

const AddTodoForm = (props) => {
  
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
    props.onAddTodo(newTodo)
    setTodoTitle("")
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle}></input>
          <button>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm