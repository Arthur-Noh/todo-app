import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

// todos 배열을 props로 받아 온 후,
// 이를 map하여 여러개의 todo 실행
const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="ToDoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default TodoList;