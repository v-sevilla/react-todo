import React from "react";

const InputWithLabel = ({todoTitle, handleTitleChange, label}) => {
  return (
    <>
      <label htmlFor="todoTitle">{label}</label>
      <input id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle}></input>
    </>
  )
}

export default InputWithLabel