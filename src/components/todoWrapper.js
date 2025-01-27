import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './todo';
import { EditTodoForm } from './editTodoForm';

uuidv4();

export const TodoWrapper =() =>{
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos , {id : uuidv4() ,task : todo , completed : false , idEditing:false }])
        console.log(todos)
    }
    const toggleComplete= id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , completed : !todo.completed} : todo))
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id?{...todo ,isEditing :!todo.isEditing} : todo))
    }
    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , task ,isEditing : !todo.isEditing} : todo))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Ghost of Tsushima</h1>
            <TodoForm addTodo = {addTodo} />
            {todos.map((todo , index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task = {todo} key ={todo.id}/>
                ) : (<Todo task ={todo} key ={todo.id} todo = {todo}
                    toggleComplete={toggleComplete}
                    deleteTodo = {deleteTodo} 
                    editTodo={editTodo}  />) 

                
                
            ))}
            
        </div>
    )
}