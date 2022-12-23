import React, { useState} from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {
    const  [formStyle, setFormStyle] = useState({display: 'none'})

    const toggleBodyForm = () => {
        formStyle.display === 'block' ? setFormStyle({display: 'none'}) : setFormStyle({display: 'block'})
    }

    const deleteClickedTodo=() => {
        props.deleteTodo(props.todo)
    }

    return(
        <li data-todos-index={props.todo._id}>
            <div>
               <span className="todo-item">{props.todo.body}</span> 
               
               <button className="edit" onClick={toggleBodyForm}>Edit To Do</button>
        
                <button 
                    className="remove"
                    onClick={deleteClickedTodo}>
                    {" "} Done!
                </button>

            </div>
        <TodoForm
        todo={props.todo}
        style={formStyle}
        //style={state.formStyle}
        autoFocus={true}
        buttonName="Update To Do!"
        updateTodo={props.updateTodo}
        toggleBodyForm={toggleBodyForm} />
    </li>
    )
}

export default Todo;