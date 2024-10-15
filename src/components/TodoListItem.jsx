import React from "react";
import PropTypes from "prop-types";
import style from './TodoListItem.module.css'
import trashcan from "../assets/trashcan.svg"

const TodoListItem = ({ todo, onRemoveTodo, id}) => {
  return (
    <li className={style.ListItem}>
      <span className={style.todo}>{todo}</span>
      <button className={style.button} type="button" onClick={() => onRemoveTodo(id)}><img className={style.trashIcon} src={trashcan}></img></button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func,
}

export default TodoListItem