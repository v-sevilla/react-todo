import React from 'react';
import { Link } from 'react-router-dom';
import style from './Homepage.module.css';


const Homepage = () => {
  return (
    <>
      <section className={style.section}>
        <p>What did I forgot to do again?</p>
        <img className={style.gif} src="src/assets/psyduckForget.webp"></img>
      </section>
      <section>
        <p>Don't be like Psyduck. </p>
        <p>Click below to get started!</p>
        <Link to="todolist"><button className={style.createTodo}>Create a todo list</button></Link>
      </section>
    </>
  )
}

export default Homepage