import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  todoList = [
    {
      id: 1,
      title: "Complete assignment"
    },
    {
      id: 2,
      title: "Create logo"
    },
    {
      id: 3,
      title: "Create vinyl design"
    }
  ]

  return (
    <div>
      <h1>Todo List</h1>
      <ul></ul>
    </div>
  )
}

export default App
