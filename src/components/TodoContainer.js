import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import './styles.css';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        d: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        d: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        d: uuidv4(),
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
        todos: [...prevState.todos.filter((todo) => todo.id !== id)],
      }));
    };

    addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
      }));
    };

    setUpdate = (updatedTitle, id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          const eachTodo = todo;
          if (eachTodo.id === id) {
            eachTodo.title = updatedTitle;
          }
          return todo;
        }),
      }));
    };

    render() {
      const { todos } = this.state;
      // console.log(todos);
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            {' '}
            <TodosList
              todos={todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
            />
            {' '}

          </div>
        </div>
      );
    }
}
export default TodoContainer;
