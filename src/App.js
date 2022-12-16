import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import styled from "styled-components";
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer isActive={true} />
      <TodoListContainer isActive={false} />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1200px;
  min-width: 800px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
