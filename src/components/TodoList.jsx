import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css"

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <ul className={style.ul}>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item.title} onRemoveTodo={onRemoveTodo} id={item.id}/>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList