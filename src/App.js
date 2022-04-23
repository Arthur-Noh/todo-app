import TodoTemplate from './components/TodoTemplate';
import React, { useCallback, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "TODO 리스트의 첫번째 값",
      checked: true,
    },
    {
      id: 2,
      text: "TODO 리스트의 두번째 값",
      checked: true,
    },
    {
      id: 3,
      text: "TODO 리스트의 세번째 값",
      checked: true,
    },
  ]);

  const nextId = React.useRef(4);

  const onInsert = React.useCallback((text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos((prev) => prev.concat(todo));
      nextId.current += 1;
    }, [todos]);

  const onRemove = React.useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
