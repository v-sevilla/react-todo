import React from "react";

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

const TodoList = () => {
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