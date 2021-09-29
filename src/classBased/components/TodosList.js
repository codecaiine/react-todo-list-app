import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */

const TodosList = (props) => {
  const { todos } = props;
  const { setUpdate } = props;
  const { handleChangeProps } = props;
  const { deleteTodoProps } = props;
  return (
    <ul className="todo-wrapper">
      {' '}
      {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={handleChangeProps}
                deleteTodoProps={deleteTodoProps}
                setUpdate={setUpdate}
              />
            ))
        }
      {' '}

    </ul>
  );
};
export default TodosList;
