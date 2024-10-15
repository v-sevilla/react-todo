import React from "react";
import { useState } from 'react'
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css"
import az from "../assets/az.svg"
import za from "../assets/za.svg"

const TodoList = ({todoList, onRemoveTodo}) => {

  const [isAscending, setIsAscending] = useState(true)

  const sortTodoTitleAsc = (todos) => {
    return todos.sort((a, b) => {
      const titleA = a.title.toLowerCase()
      const titleB = b.title.toLowerCase()

      if (titleA > titleB) return 1
      if (titleA < titleB) return -1
      return 0
    });
  };

  const sortTodoTitleDesc = (todos) => {
    return todos.sort((a, b) => {
      const titleA = a.title.toLowerCase()
      const titleB = b.title.toLowerCase()

      if (titleA < titleB) return 1
      if (titleA > titleB) return -1
      return 0
    });
  };

  const toggleSort = () => {
    setIsAscending(!isAscending)
  }

  let sortedTodoList = () => {
    if (isAscending) {
      return sortTodoTitleAsc([...todoList])
    }
    else {
      return sortTodoTitleDesc([...todoList])
    }
  }

  return (
    <>
      <span className={style.sort}>Sort by title: <button className={style.sortButton} onClick={toggleSort}>{isAscending ? <img className={style.icon} src={az}></img> : <img className={style.icon} src={za}></img>}</button></span>
      <ul className={style.ul}>
        {sortedTodoList().map((item) => (
          <TodoListItem key={item.id} todo={item.title} onRemoveTodo={onRemoveTodo} id={item.id}/>
        ))}
      </ul>
    </>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList