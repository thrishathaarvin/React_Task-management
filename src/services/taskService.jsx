import { TASK_STATUS } from "../constants/taskStatus.jsx";

export function createTask({title, description}){
    return{
        id:crypto.randomUUID(),
        title,
        description,
        createdAt: new Date().toISOString(),
        status: TASK_STATUS.TODO,
    };
}