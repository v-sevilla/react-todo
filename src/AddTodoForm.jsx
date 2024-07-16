import React from "react";

const AddTodoForm = (props) => {

  const [todoList, setTodoList] = React.useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = todoList
    props.onAddTodo(todoTitle)
    setTodoList("")
  }
  
  const handleInputChange = (event) => {
    setTodoList(event.target.value);
    console.log(event)
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" name="title" onChange={handleInputChange} value={todoList}></input>
          <p>{todoList}</p>
          <button>Add</button>
      </form>
    </div>
  )
}
  
  export default AddTodoForm