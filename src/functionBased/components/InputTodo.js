import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
/* eslint-disable react/prop-types */

const InputTodo = (props) => {
        const [inputText, setInputText] = useState({
            title: '',
        });

        const onChange = (e) => {
            setInputText({
                ...inputText,
                [e.target.name]: e.target.value,
            });
        };

        handleSubmit = (e) => {
            const handleSubmit = (e) => {
                e.preventDefault();
                if (inputText.title.trim()) {
                    props.addTodoProps(inputText.title);
                    setInputText({
                        title: '',
                    });
                }
                return {};
            };

            return ( <
                form onSubmit = { handleSubmit }
                className = "form-container" >
                <
                input type = "text"
                className = "input-text"
                placeholder = "Add todo..."
                value = { inputText.title }
                name = "title"
                onChange = { onChange }
                /> < <
                button type = "submit"
                className = "input-submit"
                aria - label = "Add" > < FaPlusCircle / > < /button> < /
                form >
            );
        };

        export default InputTodo;