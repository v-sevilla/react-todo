import React from "react";

const InputWithLabel = ({todoTitle, handleTitleChange, children}) => {
  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle}></input>
    </>
  )
}

export default InputWithLabel