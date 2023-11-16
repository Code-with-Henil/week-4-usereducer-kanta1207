import React from 'react';
import { Todo } from '../stores/todoReducer';

type TodoProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};
export const TodoComponent: React.FC<TodoProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};
