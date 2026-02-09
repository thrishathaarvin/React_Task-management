import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { createTask } from "../services/taskService.jsx";

export function useTasks() {
  const { state, dispatch } = useContext(TaskContext);

  const addTask = (data) => {
    dispatch({ type: "CREATE_TASK", payload: createTask(data) });
  };

  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const updateStatus = (id, status) => {
    dispatch({ type: "UPDATE_STATUS", payload: { id, status } });
  };

  return {
    tasks: state.tasks,
    username: state.username,
    addTask,
    updateTask,
    deleteTask,
    updateStatus,
  };
}
