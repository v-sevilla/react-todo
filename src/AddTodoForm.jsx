import React from "react";

const AddTodoForm = (props) => {

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (todoTitle) => {
    todoTitle.preventDefault();
    setNewTodo(todoTitle.target.value);
    props.onAddTodo(todoTitle);
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