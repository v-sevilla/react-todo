import React from "react";

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
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  )
}

export default TodoList