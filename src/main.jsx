import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import { TasksApp } from "./pages/TasksApp.jsx";
import { TasksProvider } from "./context/TasksProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksProvider>
      <TasksApp />
    </TasksProvider>
  </React.StrictMode>
);
