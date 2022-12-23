import React, {useState} from "react";

const TodoForm = (props)=> {
    const[todo, setTodo]=useState("")

    const onChange=(e)=> {
        setTodo.apply(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        const todo = {body: todo}
        props.updateTodo(todo)
        setTodo("")
        props.toggleBodyForm()
    }

    return(
        <div>
            <form onSubmit={onSubmit} id="taskForm">
                <input onChange={onChange}
                type="text" id="newItemDescription" placeholder="What do you need to do?"
                value={todo.body} />
                <button type= "sumbit" id="addTask" className="button">Add To Do</button>
            </form>
        </div>
    )
}

export default TodoForm