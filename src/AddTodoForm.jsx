import React from "react";

const AddTodoForm = () => {

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.value;
    console.log(todoTitle)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleAddTodo}></input>
          <button>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm