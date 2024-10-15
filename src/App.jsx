import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage';
import TodoContainer from './components/TodoContainer';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"><button className="navButton">Home</button></Link>
        <Link to="/todolist"><button className="navButton">Todo List</button></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/todolist' element={<TodoContainer tableName={import.meta.env.VITE_TABLE_NAME}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App