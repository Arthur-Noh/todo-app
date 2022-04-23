import React from "react";
import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <div className="ToDoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  )
}

export default TodoList;