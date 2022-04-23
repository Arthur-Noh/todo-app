import React from "react";
import "./TodoListItem.scss";
import cn from "classname";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 보여줌
const TodoListItem = ({ todo, onRemove }) => {
  const { text, checked, id } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem;