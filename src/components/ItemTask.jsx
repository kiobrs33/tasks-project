import PropTypes from "prop-types";

export const ItemTask = ({ taskValue, handleToggleTask, handleRemoveTask }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="d-flex justify-content-between">
          <div>
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={taskValue.done}
              onChange={() => handleToggleTask(taskValue.id)}
            />
            <label className="form-check-label">{taskValue.description}</label>
          </div>
          <button
            onClick={() => handleRemoveTask(taskValue.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

ItemTask.propTypes = {
  taskValue: PropTypes.object.isRequired,
  handleToggleTask: PropTypes.func,
  handleRemoveTask: PropTypes.func,
};
