import React from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import './styles.css';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = (id) => {
      // const { todos } = this.state;
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          const eachTodo = todo;
          if (eachTodo.id === id) {
            return {
              ...eachTodo,
              completed: !eachTodo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    delTodo = (id) => {
      this.setState((prevState) => ({
        todos: [
          ...prevState.todos.filter((todo) => todo.id !== id),
        ],
      }));
    };

    render() {
      const { todos } = this.state;
      // console.log(todos);
      return (
        <div className="my-container">
          <Header />
          <InputTodo />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      );
    }
}

export default TodoContainer;
