import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch(toggleComplete(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        <button onClick={() => dispatch(toggleComplete(todo.id))}>Done</button>
                    </li>
                ))}
            </ul>
            <h2>Completed</h2>
            <ul>
                {todos.map((todo) => (
                    todo.completed && (

                        <li key={todo.id}>{todo.text}
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button></li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
