export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { title: action.payload, done: false }];
    case "TOGGLE_TASK":
      return state.map((t, i) =>
        i === action.payload ? { ...t, done: !t.done } : t
      );
    case "DELETE_TASK":
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
};
