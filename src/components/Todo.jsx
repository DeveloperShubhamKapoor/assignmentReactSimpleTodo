import React from "react"
import { TodoInput } from "./Todoinput"
import { TodoItem } from "./TodoItem";
import { TodoList } from "./Todolist";
import { v4 as uuidv4 } from 'uuid';

const Todo = ()=>{

    const [todos,setTodos] = React.useState([]);
    const addTodo = (newTodo)=>{
        setTodos([...todos,{
            key: uuidv4(),
            value: newTodo
        }]) 
    };
    return (
        <div>
            <TodoInput addTodo = {addTodo} />
            <TodoList>
                {todos.map((todo)=>(
                    <div>
                        <TodoItem key = {todo.key} todoitem={todo.value} />
                    </div>
                ))}
            </TodoList>
        </div>                                        
    )
}

export {Todo}