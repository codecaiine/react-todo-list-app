import React from 'react';
/* eslint-disable react/prop-types */

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <li>
      {' '}
      { todo.title }
      {' '}

    </li>
  );
};

export default TodoItem;
