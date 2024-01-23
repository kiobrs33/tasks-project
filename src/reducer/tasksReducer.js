export const initTasksState = [];

export const initTasksFunc = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
};

export const tasksReducer = (initState = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.payload, ...initState];
    case "TOGGLE_TASK":
      return initState.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
    case "REMOVE_TASK":
      return initState.filter((item) => item.id !== action.payload.id);

    default:
      return initState;
  }
};
