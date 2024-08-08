import React from "react";

const TodoListItem = ({title, onRemoveTodo, id}) => {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}

export default TodoListItem