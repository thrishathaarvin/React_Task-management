import {useReducer} from "react";
import { TaskContext } from "./TaskContext.jsx";
import { taskReducer } from "../reducers/taskReducer.jsx";

const initialState={
    username: "Thrishatha",
    tasks: [
    {
      id: 1,
      title: "Finish React project",
      description: "Complete the task management website UI",
      status: "TODO",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Write documentation",
      description: "Document the API and usage of the app",
      status: "COMPLETED",
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Test notifications",
      description: "Ensure all task status notifications work",
      status: "IN_PROGRESS",
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Review code",
      description: "Check code for reusability and context usage",
      status: "TODO",
      createdAt: new Date().toISOString(),
    },
  ],
};

export function TaskProvider({children}){
    const [state, dispatch]=useReducer(taskReducer,initialState);

    return(
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}