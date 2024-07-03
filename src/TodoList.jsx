import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title: "Complete lesson 1_2"
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
          return <TodoListItem />;
        })}
      </ul>
    </div>
  )
}

export default TodoList