import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.list.map(function(item){
          <TodoListItem key={item.id} todo={item}/>
        })}
      </ul>
    </div>
  )
}

export default TodoList