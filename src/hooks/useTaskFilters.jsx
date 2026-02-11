import { TASK_STATUS } from "../constants/taskStatus.jsx";

export function filterTasks(tasks, options = {}) {
  let result = [...tasks];

  if (options.status) {
    result = result.filter(task => task.status === options.status);
  }

  if (options.excludeCompleted) {
    result = result.filter(task => task.status !== TASK_STATUS.COMPLETED);
  }

  if (options.sortByDate) {
    result = result.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  if (options.limit) {
    result = result.slice(0, options.limit);
  }

  return result;
}
