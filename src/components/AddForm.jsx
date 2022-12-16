import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    if (content === "") return;

    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <StHeader>Todo List</StHeader>
        <label>제목:</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용:</label>
        <StInput2
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <StButton>추가</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  border: none;
  background-color: #4dabf7;
  color: white;
  margin: 5px;
  height: 30px;
  cursor: pointer;
  width: 60px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #4dabf7;
  margin: 5px;
  height: 25px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StInput2 = styled.input`
  border: 1px solid #4dabf7;
  margin: 5px;
  width: 300px;
  height: 25px;
  border-radius: 12px;
  outline: none;
`;

const StHeader = styled.div`
  font-size: 40px;
  color: #4dabf7;
  text-align: center;
`;
