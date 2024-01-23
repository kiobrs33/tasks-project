import { AddTask } from "../components/AddTask";
import { ListTasks } from "../components/ListTasks";

export const TasksApp = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <ListTasks tasks />
        </div>
        <div className="col">
          <AddTask />
        </div>
      </div>
    </div>
  );
};
