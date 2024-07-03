import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title: "Submit weekly assignment"
    },
    {
      id: 2,
      title: "Add Javascript functionality to website"
    },
    {
      id: 3,
      title: "Create vinyl design"
    }
]

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function(item){
          <TodoListItem key={item.id} todo={item}/>;
        })}
      </ul>
    </div>
  )
}

export default TodoList