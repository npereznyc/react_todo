import React, { useState, useEffect } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

const TodosContainer = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    TodoModel.all().then((res)=> {
      console.log(res)
      setTodos(res.data)
    })
  // },[])
  },[todos.length])

  const createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false,
    }
    TodoModel.create(newTodo).then((res) => {
      let allTodos = todos.slice()
      todos.push(res.data)
      setTodos(allTodos)
    })
  }
  const deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
      let filteredTodos = todos.filter((todo) => {
        return todo._id !== res.data._id
      })
      setTodos(filteredTodos)
    })
  }
  const updateTodo = todo => {
    const isUpdatedTodo = t => {
      return t._id === todo._id
    }
    TodoModel.update(todo).then((res) => {
      let updatedTodos = todos.slice()
      todos.find(isUpdatedTodo).body = todo.bodysetTodos(updatedTodos)
    })
  }
//why is the syntax for the updateTodo different than create and delete?

    return (
      <div className="todosComponent">
        <CreateTodoForm createTodo={createTodo}/>
        
        <Todos 
        todos = {todos}
        updateTodo = {updateTodo}
        deleteTodo={deleteTodo}/>
      </div> 
    ) 
}

export default TodosContainer;