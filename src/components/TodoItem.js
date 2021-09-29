import React from 'react';
/* eslint-disable react/prop-types */

const TodoItem = (props) => {
  const { todo } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={
            () => { handleChangeProps(todo.id); }
}
      />
      {' '}
      <button
        type="button"
        onClick={
            () => { deleteTodoProps(todo.id); }
}
      >
        {' '}
        Delete
        {' '}
      </button>
      {' '}
      { todo.title }
      {' '}

    </li>
  );
};

export default TodoItem;
