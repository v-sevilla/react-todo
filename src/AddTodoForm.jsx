import React from "react";

const AddTodoForm = () => {

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleAddTodo}></input>
          <p>{newTodo}</p>
          <button>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm