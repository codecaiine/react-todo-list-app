import React from 'react';

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
        />
        {' '}
        <button type="submit">
          {' '}
          Submit
          {' '}
        </button>
        {' '}

      </form>
    );
  }
}

export default InputTodo;
