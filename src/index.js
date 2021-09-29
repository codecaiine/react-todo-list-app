/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDom from 'react-dom';
import './functionBased/App.css';
import TodoContainer from './functionBased/components/TodoContainer';

ReactDom.render( < React.StrictMode >
    <
    TodoContainer / >
    <
    /React.StrictMode>,
    document.getElementById('root'));