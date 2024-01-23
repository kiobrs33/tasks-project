import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { useForm } from "../hooks/useForm";

export const AddTask = () => {
  const { dispatch } = useContext(TasksContext);
  const [done, setDone] = useState(false);
  const { formValues, onChangeInput, onResetForm } = useForm({
    description: "",
    done: false,
  });

  const { description } = formValues;

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: new Date().getTime(),
        description,
        done,
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
    setDone(false);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>New task</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          id="inputDescriptionTask"
          name="description"
          value={description}
          aria-describedby="taskDescription"
          onChange={onChangeInput}
        />
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Done
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
