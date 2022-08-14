import './App.css';
import Form from './components/Form'
import React,{useState} from  'react'
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]= useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos]=useState([]);

  const filterHandler = ()=> {

      switch (status) {
        case "complated":
          setFilteredTodos(todos.filter((todo)=>todo.complated===true));
          break;
          case "uncomplate":
          setFilteredTodos(todos.filter((todo)=>todo.complated===false));
        break;
        default:
          setFilteredTodos(todos);
          break;
      }

  }

  return (
    <div className="App">
     <header>
      <h1>MY TODO LIST</h1>
     </header>
     <Form 
     inputText={inputText}
     setInputText={setInputText}
     todos={todos}
     setTodos={setTodos}
     />
     <TodoList 
      todos={todos}
      setTodos={setTodos}
     />
    </div>
  );
}

export default App;
