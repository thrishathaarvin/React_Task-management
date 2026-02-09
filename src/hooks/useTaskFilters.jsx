import { TASK_STATUS } from "../constants/taskStatus.jsx";

export function useTaskFilters(tasks){
    const all=tasks;

    const todo=tasks.filter(t=> t.status === TASK_STATUS.TODO);
    const inProgress= tasks.filter(t=>t.status === TASK_STATUS.IN_PROGRESS);
    const completed=tasks.filter(t=>t.status===TASK_STATUS.COMPLETED);

    const pendingCount=todo.length +inProgress.length;

    const upcomingTasks= [...tasks]
    .filter((task)=>task.status!=="COMPLETED")
    .sort((a,b)=>new Date(b.createdDate)-new Date(a.createdDate))
    .slice(0,4);

    return {
        all,
        todo,
        inProgress,
        completed,
        pendingCount,
        upcomingTasks,
    };
}