import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import Navbar from './Navbar';

const TodoContainer = () => {
    const getInitialTodos = () => {
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    };

    const [todos, setTodos] = useState(getInitialTodos());

    useEffect(() => {
        const temp = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(temp);

        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, [setTodos]);

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);

    const handleChange = (id) => {
        setTodos((prevState) => prevState.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        }));
    };

    const delTodo = (id) => setTodos([...todos.filter((todo) => todo.id !== id)]);

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
                const eachTodo = todo;
                if (eachTodo.id === id) {
                    eachTodo.title = updatedTitle;
                }
                return todo;
            }),
        );
    };

    return ( <
        >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        div className = "container" >
        <
        div className = "inner" >
        <
        Header / >
        <
        InputTodo addTodoProps = { addTodoItem }
        /> <
        TodosList todos = { todos }
        handleChangeProps = { handleChange }
        deleteTodoProps = { delTodo }
        setUpdate = { setUpdate }
        /> <
        /div> <
        /div> <
        /Route> <
        Route path = "/about" >
        <
        About / >
        <
        /Route> <
        Route path = "*" >
        <
        NotMatch / >
        <
        /Route> <
        /Switch> <
        />
    );
};

export default TodoContainer;