import React, { useEffect, useRef } from "react";
import style from './InputWithLabel.module.css'

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <label className={style.label} htmlFor="todoTitle">{children}</label>
      <input className={style.input} id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle} ref={inputRef}></input>
    </>
  )
}

export default InputWithLabel