import React, { useReducer, useState } from 'react';
import { todoReducer, Todo } from './stores/todoReducer';
import styled from 'styled-components';
import { TodoComponent } from './components/TodoComponent';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [] as Todo[]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <Container>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <TodoComponent
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </Container>
  );
};

export default TodoApp;
