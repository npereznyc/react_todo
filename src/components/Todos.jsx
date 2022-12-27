import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
        let todos = props.todos.map((todo)=> (
           <Todo 
            key={todo._id}
            todo={todo}
            updateTodo = {props.updateTodo}
            deleteTodo={props.deleteTodo} /> 
        ))

    return (
        <ul>
            {todos}
        </ul>
    )
    }

export default Todos;