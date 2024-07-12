import React from "react";

const AddTodoForm = () => {

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(event)
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
          <button type="submit">Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm