import React from "react";

const TodoListItem = ({title}) => {
  return (
    <li>
      {title}
      <button type="button">Remove</button>
    </li>
  );
}

export default TodoListItem