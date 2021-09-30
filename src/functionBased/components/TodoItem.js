import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';
/* eslint-disable react/prop-types */
/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
    };

    const handleKeyPress = () => {
        setEditing(true);
    };

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setEditing(false);
        }
    };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };
    const { todo } = props;
    const { completed, id, title } = todo;

    const viewMode = {};
    const editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    return ( <
        li className = { styles.item } >
        <
        div style = { viewMode } >

        <
        input type = "checkbox"
        className = { styles.checkbox }
        checked = { completed }
        onChange = {
            () => props.handleChangeProps(id)
        }
        /> < /

        <
        button type = "button"
        onClick = {
            () => props.deleteTodoProps(id)
        } >
        <
        FaTrash / > <
        /button> <
        span style = { completed ? completedStyle : null }
        onClick = { handleEditing }
        onKeyPress = { handleKeyPress }
        role = "presentation" > { title } <
        /span> < /
        div > <
        input type = "text"
        style = { editMode }
        className = { styles.textInput }
        value = { title }
        onChange = {
            (e) => {
                props.setUpdate(e.target.value, id);
            }
        }
        onKeyDown = { handleUpdatedDone }
        /> < /
        li >
    );
};
// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       editing: false,
//     };
//   }

//   componentWillUnmount() {
//     console.log('Cleaning up...');
//   }

//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//   };

//   handleKeyPress = () => {
//     this.setState({
//       editing: true,
//     });
//   };

//   handleUpdatedDone = (event) => {
//     if (event.key === 'Enter') {
//       this.setState({ editing: false });
//     }
//   };

//   render() {
//     const { todo } = this.props;
//     const { handleChangeProps } = this.props;
//     const { deleteTodoProps } = this.props;
//     const { setUpdate } = this.props;
//     const { editing } = this.state;
//     const { completed, id, title } = todo;
//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#595959',
//       opacity: 0.4,
//       textDecoration: 'line-through',
//     };

//     const viewMode = {};
//     const editMode = {};

//     if (editing) {
//       viewMode.display = 'none';
//       editMode.display = 'block';
//     } else {
//       editMode.display = 'none';
//       viewMode.display = 'block';
//     }

//     return (
//       <li className={styles.item}>
//         <div style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={completed}
//             onChange={() => {
//               handleChangeProps(id);
//             }}
//           />
//           <button
//             type="button"
//             onClick={() => {
//               deleteTodoProps(id);
//             }}
//           >
//             Delete
//           </button>
//           <span
//             style={completed ? completedStyle : null}
//             onClick={this.handleEditing}
//             onKeyPress={this.handleKeyPress}
//             role="presentation"
//           >
//             {title}
//           </span>
//         </div>
//         <input
//           type="text"
//           className={styles.textInput}
//           style={editMode}
//           value={title}
//           onChange={(e) => {
//             setUpdate(e.target.value, id);
//           }}
//           onKeyDown={this.handleUpdatedDone}
//         />
//       </li>
//     );
//   }
// }

export default TodoItem;