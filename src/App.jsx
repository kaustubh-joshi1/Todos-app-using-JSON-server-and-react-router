// App.jsx
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { Todo } from './todo/Todo';
import AddTodo from './todo/AddTodo';
import { UpdateTodo } from './todo/UpdateTodo';
function App() {
 
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Todo/>}/>
    <Route path='/add' element={<AddTodo/>}/>
    <Route path='/edit/:todoId' element={<UpdateTodo/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
