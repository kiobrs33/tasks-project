import PropTypes from "prop-types";
import { TasksContext } from "./TasksContext";
import { useReducer } from "react";
import {
  initTasksFunc,
  initTasksState,
  tasksReducer,
} from "../reducer/tasksReducer";

export const TasksProvider = ({ children }) => {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    initTasksState,
    initTasksFunc
  );

  return (
    <TasksContext.Provider value={{ tasksState, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

TasksProvider.propTypes = {
  children: PropTypes.any,
};
