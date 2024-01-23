import { useContext, useEffect } from "react";
import { ItemTask } from "./ItemTask";
import { TasksContext } from "../context/TasksContext";

export const ListTasks = () => {
  const { tasksState, dispatch } = useContext(TasksContext);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksState));
  }, [tasksState]);

  const handleToggleTask = (id) => {
    console.log(id);
    dispatch({
      type: "TOGGLE_TASK",
      payload: {
        id,
      },
    });
  };

  const handleRemoveTask = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <h2>List Tasks</h2>
      <ul className="list-group">
        {tasksState.map((item) => (
          <ItemTask
            key={item.id}
            taskValue={item}
            handleToggleTask={handleToggleTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};
