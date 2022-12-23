import React, {useState} from "react";

const TodoForm = (props)=> {
    const[todo, setTodo]=useState("")

    const onChange=(e)=> {
        setTodo(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        const updateTodo = {body: todo}
        props.updateTodo(updateTodo)
        setTodo("")
        props.toggleBodyForm()
    }

    return(
        <div>
            <form onSubmit={onSubmit} id="taskForm">
                <input onChange={onChange}
                type="text" id="newItemDescription" placeholder="What do you need to do?"
                value={todo} />
                <button type= "sumbit" id="addTask" className="button">Update To Do</button>
            </form>
        </div>
    )
}

export default TodoForm