import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage';
import TodoContainer from './components/TodoContainer';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/todolist"><button>Todo List</button></Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/todolist' element={<TodoContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App