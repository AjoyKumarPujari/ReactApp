import { useState } from "react";
import TodoList from "./TodoList";
import './Todo.css';
let todos = [
    {id:1, data:'Todo 1'},
    {id:2, data:'Todo 2'},
    {id:3, data:'Todo 3'},
];
function Todo(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(" ");
    const [isFinished, setIsFinished] = useState(" ");
    return(
        <div className="todo">
             {/* <TodoList todos={todos}/>   */}
            <input type="text" placeholder="New Todo..." 
            onChange={(event)=>  setNewTodo(event.target.value)}
            /><br/>
            <button onClick={() => setTodos ([...todos, newTodo])}>Add Todo</button>
            <TodoList todos ={todos} /><br/>
            <span className={(isFinished) ? 'todo-done' : 'todo-notdone'}>Todo Items</span><br/>
            <button onClick={() => setIsFinished (!isFinished)}>{(isFinished)? 'Redo': 'Done'}</button>
        </div>
    )   
}
export default Todo;