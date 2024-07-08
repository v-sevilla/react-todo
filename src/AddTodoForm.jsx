import React from "react";

const AddTodoForm = (props) => {

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (todoTitle) => {
    todoTitle.preventDefault();
    setNewTodo(todoTitle.target.value);
    todoTitle.target.reset()
  }

  const addTodo = () => {
    props.onAddTodo(newTodo)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleAddTodo}></input>
          <p>{newTodo}</p>
          <button onClick={addTodo}>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm