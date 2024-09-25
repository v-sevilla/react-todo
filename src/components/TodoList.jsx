import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} title={item.title} onRemoveTodo={onRemoveTodo} id={item.id}/>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList