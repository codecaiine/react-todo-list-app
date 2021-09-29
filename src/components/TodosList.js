import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {' '}
      {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))
        }
      {' '}

    </ul>
  );
};

export default TodosList;
