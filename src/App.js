import React,{useState} from 'react';
import './App.css'
import CreateModel from './CreateModel';
import Todo from './Todo';
import TodoTasks from './TodoTasks';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [inputvalue, setinputvalue] = useState('')
  const [todo ,settodo]=useState([])
  const [edittodo, setedittodo]=useState(null)
  const [toggle, settoggle]=useState(true)
  const[show, setshow]=useState(false)
  const [inputdata,setinputdata]=useState('')
  
  
  

    const handleUpdate=(id)=>{
      setshow(true)
      let editItem=todo.find((element)=>{
        return element.id===id
      })

      
      setinputdata(editItem.text)
       setedittodo(id)
       settoggle(false)

    }      
    const handleDelete=(id)=>{
      
     const mytodos=todo.filter((elements,i)=>elements.id!==id);
    settodo(mytodos)
      
    }

  return (
    
    <div className="App">

      <Todo inputvalue={inputvalue} setinputvalue={setinputvalue} todo={todo} settodo={settodo} />
      <TodoTasks todo= {todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />

      <CreateModel show={show} setShow={setshow} inputdata={inputdata} setinputdata={setinputdata} handleUpdate={handleUpdate} todo={todo} settodo={settodo} toggle={toggle} settoggle={settoggle}  edittodo={edittodo} />
      
     
    </div>
  );
}

export default App;
