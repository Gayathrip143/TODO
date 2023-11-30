import {useState} from "react";


export default function App (){

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleInputChange(e){

    setTodo(e.target.value);
  }
  function handleFormSubmit(e){

    e.preventDefault();

    if(todo !==""){

      setTodos([

        ...todos,
        {
          id:todos.length + 1,

          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }

  return(
    <div className="App">

      <h1>Todo App</h1>

      <form onSubmit={handleFormSubmit}>

        {                  }

        <input
        name="todo"
        type="text"
        placeholder="Creat a new todo"
        value={todo}
        onChange={handleInputChange}
        />

      </form>
      {               }

      <ul className="todo-list">

        {                  }

      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
        ))}
        </ul>
    </div>
  );
}
