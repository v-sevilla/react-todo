import React from "react";

const InputWithLabel = ({todoTitle, handleTitleChange}) => {
  return (
    <>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" name="title" onChange={handleTitleChange} value={todoTitle}></input>
    </>
  )
}

export default InputWithLabel