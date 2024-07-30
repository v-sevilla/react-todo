import React, { useEffect, useRef } from "react";

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle} ref={inputRef}></input>
    </>
  )
}

export default InputWithLabel