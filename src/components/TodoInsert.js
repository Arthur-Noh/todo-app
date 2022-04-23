import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state 를 통해 인풋의 상태를 관리
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = React.useState("");

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback((e) => {
    if (value === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    
    onInsert(value);
    setValue("");

    e.preventDefault();
  },[ value, onInsert ]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요." value={value} onChange={onChange}></input>
      <button type="submit">
          <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert;