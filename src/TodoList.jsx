import React from "react";
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

export default TodoList