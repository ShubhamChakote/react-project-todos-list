
import './App.css';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos));

  }

  const addTodo = (title,desc)=>{
    

    let srno;

    if(todos.length==0){
      srno=1;
    }else{
    srno = todos[todos.length-1].srno+1;}

    let newTodo = {
      srno:srno,
      title:title,
      desc:desc
    }
     setTodos([...todos,newTodo]);
    
    


  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

   

  return (
    <>
    <Router>
    <Header title="Todos List" searchBar={false}/>

    <Routes>
          {/* <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}/> */}
          <Route exact path='/' element={
           <> 
          <AddTodo addTodo={addTodo}/> 
          <Todos todos={todos} onDelete={onDelete}/> 
          </>
          }/>
          <Route exact path="/about" element={<About />}/>
            
      
          
    </Routes>

    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
