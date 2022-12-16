import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoListContainer = () => {
  const { todos, isActive } = useSelector((state) => state.todos);
  return (
    <StTodos>
      <h4>{isActive === true ? "1" : "3"}</h4>
      {todos.map((todo) => (
        <StTodo key={todo.id}>
          <Sth1>{todo.title}</Sth1>
          <Stp>{todo.content}</Stp>
        </StTodo>
      ))}
    </StTodos>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  align-items: center;
  padding: 0px 24px;
  border-radius: 12px;
  line-height: 30px;
`;

const Sth1 = styled.div`
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  font-size: 20px;
`;

const Stp = styled.div`
  margin-top: 10px;
`;
