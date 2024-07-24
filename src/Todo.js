import { useState } from "react";
import TodoList from "./TodoList";
let todos = [
    {id:1, data:'Todo 1'},
    {id:2, data:'Todo 2'},
    {id:3, data:'Todo 3'},
];
function Todo(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(" ");
    return(
        <div className="todo">
             {/* <TodoList todos={todos}/>   */}
            <input type="text" placeholder="New Todo..." 
            onChange={(event)=>  setNewTodo(event.target.value)}
            /><br/>
            <button onClick={() => setTodos ([...todos, newTodo])}>Add Todo</button>
            <TodoList todos ={todos} />
        </div>
    )   
}
export default Todo;