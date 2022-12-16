// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
      content: "과제를 합시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      content: "숙련 과제를 합시다.",
      isDone: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return [state.filter([todos.id] !== action.id)];

    default:
      return state;
  }
};

export default todos;
