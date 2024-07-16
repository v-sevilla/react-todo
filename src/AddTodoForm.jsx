import React from "react";

const AddTodoForm = (props) => {

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = newTodo
    props.onAddTodo(todoTitle)
    setNewTodo("")
  }
  
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
    console.log(event)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleInputChange} value={newTodo}></input>
          <p>{newTodo}</p>
          <button>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm