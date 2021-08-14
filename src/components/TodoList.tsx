import React from 'react';

type TodoListProps = {
  items: {id: string, text: string}[];
  onDeleteTodo: (targetId: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (<ul>
      {props.items.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>delete</button>
          </li>
      ))}
  </ul>);
}

export default TodoList;
