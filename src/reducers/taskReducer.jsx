export function taskReducer(state, action) {
  switch (action.type) {
    case "CREATE_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id ? action.payload : t
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload),
      };

    case "UPDATE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, status: action.payload.status }
            : t
        ),
      };

    default:
      return state;
  }
}
